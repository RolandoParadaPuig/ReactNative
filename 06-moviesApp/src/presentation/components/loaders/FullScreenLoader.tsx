/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, View} from 'react-native';

interface Props {}

export const FullScreenLoader: React.FC<Props> = ({}: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <ActivityIndicator size={'large'} color={'indigo'} />
    </View>
  );
};
