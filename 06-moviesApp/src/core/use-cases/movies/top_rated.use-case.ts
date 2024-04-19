import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMoviesResponse} from '../../../infrastructure/interfaces/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {type Movie} from '../../entities/movie.entitie';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
  options: Options,
): Promise<Movie[]> => {
  try {
    const nowPaying = await fetcher.get<MovieDBMoviesResponse>('/top_rated', {
      params: {
        page: options.page ?? 1,
      },
    });
    return nowPaying.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    throw new Error('Error fetching movies - Top Rated');
  }
};
