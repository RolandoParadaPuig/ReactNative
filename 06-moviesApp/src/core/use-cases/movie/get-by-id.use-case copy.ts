import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMovieByID} from '../../../infrastructure/interfaces/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {FullMovie} from '../../entities/movie.entitie';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    const fullMovie = await fetcher.get<MovieDBMovieByID>(`/${movieId}`);
    return MovieMapper.fromMovieDBResultToFullMovie(fullMovie);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    throw new Error('Error fetching movie ');
  }
};
