/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Text, View, useColorScheme} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {RootStackParams} from '../../routes/StackNavigator';

export const ProductScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  });

  return (
    <View
      style={!isDarkMode ? globalStyles.container : globalStyles.containerDark}>
      <Text>Product Screen</Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
        }}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};
