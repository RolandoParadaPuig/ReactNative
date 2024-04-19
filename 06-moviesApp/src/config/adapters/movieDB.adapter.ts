import {THE_MOVIE_DB_API_KEY} from '@env';
import {OriginalLanguage} from '../../infrastructure/interfaces/movie-db.response';
import {AxioAdapter} from './http/axios.adapter';

export const movieDBFeatcher = new AxioAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    // api_key: 'da6f8a47fcf8c382ecd63e3495f2d2f3',
    api_key: THE_MOVIE_DB_API_KEY ?? '',
    language: OriginalLanguage.En,
  },
});
