/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {
    loading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage,
    upcomingNextPage,
    topRatedNextPage,
  } = useMovies();
  if (loading) {
    return <FullScreenLoader />;
  }
  console.log(top);
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* Popular */}
        <HorizontalCarousel
          movies={popular}
          title="Populars"
          loadNexPage={() => popularNextPage()}
        />

        {/* Top Rated */}
        <HorizontalCarousel
          movies={topRated}
          title="Top Rated"
          loadNexPage={() => topRatedNextPage()}
        />

        {/* upcoming */}
        <HorizontalCarousel
          movies={upcoming}
          title="Upcoming"
          loadNexPage={() => upcomingNextPage()}
        />
      </View>
    </ScrollView>
  );
};
