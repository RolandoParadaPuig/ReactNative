import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBCastResponse} from '../../../infrastructure/interfaces/movie-db.response';
import {CastMapper} from '../../../infrastructure/mappers/cast.mapper';
import {MovieCast} from '../../entities/cast.entitie';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<MovieCast[]> => {
  try {
    const {cast} = await fetcher.get<MovieDBCastResponse>(
      `/${movieId}/credits`,
    );
    const actors = cast.map(CastMapper.FromMovieDBCastResultToCast);
    return actors;
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    throw new Error('Error fetching movie cast ');
  }
};
