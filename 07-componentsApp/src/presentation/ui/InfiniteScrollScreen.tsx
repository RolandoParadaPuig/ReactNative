/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {FadeInImage} from '../components/ui/FadeInImage';
import {ThemeContext} from '../context/ThemeContext';

export const InfiniteScrollScreen = () => {
  const {colors} = useContext(ThemeContext);
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const loadMore = () => {
    console.log('loading More');
    // add more numbers
    const newArr = Array.from({length: 5}, (_, i) => numbers.length + i);
    setTimeout(() => {
      setNumbers(state => [...state, ...newArr]);
    }, 3000);
  };
  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface ListItemsProps {
  number: number;
}

const ListItem = ({number}: ListItemsProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: '100%',
      }}
    />
  );
};
