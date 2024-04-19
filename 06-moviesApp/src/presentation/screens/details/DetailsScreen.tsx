import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {RootStackParams} from '../../routes/StackNavigator';
import {useMovie} from '../../hooks/useMovie';
import {MoviesHeader} from '../../components/movie/MoviesHeader';
import {MoviesDetails} from '../../components/movie/MoviesDetails';
import {ScrollView} from 'react-native-gesture-handler';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  const {loading, movie, cast} = useMovie(movieId);
  if (loading) {
    return <FullScreenLoader />;
  }
  return (
    <ScrollView>
      {/* Header */}
      <MoviesHeader
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
        title={movie!.title}
      />
      {/* Deatils */}
      <MoviesDetails
        rating={movie!.rating}
        genres={movie!.genres}
        description={movie!.description}
        budget={movie!.budget}
        cast={cast || []}
      />
    </ScrollView>
  );
};
