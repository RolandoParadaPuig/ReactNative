/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {movieDBFeatcher} from '../../config/adapters/movieDB.adapter';
import {FullMovie} from '../../core/entities/movie.entitie';
import {MovieCast} from '../../core/entities/cast.entitie';

export const useMovie = (movieId: number) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<MovieCast[]>();

  useEffect(() => {
    initialLoad();
  }, [movieId]);

  const initialLoad = async () => {
    setLoading(true);
    const fullMoviePromise = UseCases.getMovieByIdUseCase(
      movieDBFeatcher,
      movieId,
    );
    const casitPromise = UseCases.getMovieCastUseCase(movieDBFeatcher, movieId);
    const [respMovie, respCast] = await Promise.all([
      fullMoviePromise,
      casitPromise,
    ]);
    setMovie(respMovie);
    setCast(respCast);
    setLoading(false);
  };

  return {
    loading,
    movie,
    cast,
  };
};
