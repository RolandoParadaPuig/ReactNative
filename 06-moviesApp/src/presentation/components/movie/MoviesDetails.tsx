/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {Formatter} from '../../../config/helpers/formatter';
import {MovieCast} from '../../../core/entities/cast.entitie';
import {FlatList} from 'react-native-gesture-handler';
import {CastActors} from '../../../core/use-cases/cast/CastActors';

interface Props {
  rating: number;
  genres: string[];
  description: string;
  budget: number;
  cast: MovieCast[];
}

export const MoviesDetails: React.FC<Props> = ({
  rating,
  genres,
  description,
  budget,
  cast,
}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{rating}</Text>

          <Text style={{marginLeft: 5}}>- {genres.join(', ')}</Text>
        </View>
        <Text style={{fontSize: 30, marginTop: 10, fontWeight: 'bold'}}>
          History
        </Text>
        <Text style={{fontSize: 16}}>{description}</Text>
        <Text style={{fontSize: 30, marginTop: 10, fontWeight: 'bold'}}>
          Budget
        </Text>
        <Text style={{fontSize: 16}}>{Formatter.currency(budget)}</Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 10}}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actors
        </Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CastActors actor={item} />}
        />
      </View>
    </>
  );
};
