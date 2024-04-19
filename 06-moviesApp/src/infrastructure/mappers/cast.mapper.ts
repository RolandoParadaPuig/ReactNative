import {MovieCast} from '../../core/entities/cast.entitie';
import {Cast} from '../interfaces/movie-db.response';

export class CastMapper {
  static FromMovieDBCastResultToCast(cast: Cast): MovieCast {
    return {
      id: cast.id,
      name: cast.name,
      character: cast.character ?? 'No Character',
      avatar: cast.profile_path
        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
    };
  }
}
