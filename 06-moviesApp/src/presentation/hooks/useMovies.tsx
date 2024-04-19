import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entitie';
import * as UseCases from '../../core/use-cases';
import {movieDBFeatcher} from '../../config/adapters/movieDB.adapter';

let popularPageNumber = 1;
let upcomingPageNumber = 1;
let topRatedPageNumber = 1;
let nowPlayingPageNumber = 1;

export const useMovies = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(
      movieDBFeatcher,
      {
        page: popularPageNumber,
      },
    );
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFeatcher, {
      page: popularPageNumber,
    });
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFeatcher, {
      page: popularPageNumber,
    });
    const pupularPromise = UseCases.moviesPopularUseCase(movieDBFeatcher, {
      page: popularPageNumber,
    });

    const [nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies] =
      await Promise.all([
        nowPlayingPromise,
        upcomingPromise,
        topRatedPromise,
        pupularPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setUpcoming(upcomingMovies);
    setTopRated(topRatedMovies);
    setPopular(popularMovies);
    setLoading(false);
  };
  return {
    loading,
    nowPlaying,
    upcoming,
    topRated,
    popular,

    // methods
    popularNextPage: async () => {
      popularPageNumber++;
      const popularMovies = await UseCases.moviesPopularUseCase(
        movieDBFeatcher,
        {
          page: popularPageNumber,
        },
      );
      setPopular(state => [...state, ...popularMovies]);
    },
    upcomingNextPage: async () => {
      upcomingPageNumber++;
      const upcomingMovies = await UseCases.moviesUpcomingUseCase(
        movieDBFeatcher,
        {
          page: upcomingPageNumber,
        },
      );
      setUpcoming(state => [...state, ...upcomingMovies]);
    },
    topRatedNextPage: async () => {
      topRatedPageNumber++;
      const topRatedMovies = await UseCases.moviesTopRatedUseCase(
        movieDBFeatcher,
        {
          page: topRatedPageNumber,
        },
      );
      setTopRated(state => [...state, ...topRatedMovies]);
    },
    nowPlayingNextPage: async () => {
      nowPlayingPageNumber++;
      const nowPlatingMovies = await UseCases.moviesNowPlayingUseCase(
        movieDBFeatcher,
        {
          page: nowPlayingPageNumber,
        },
      );
      setNowPlaying(state => [...state, ...nowPlatingMovies]);
    },
  };
};
