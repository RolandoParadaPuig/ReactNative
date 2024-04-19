import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {BottomTabNavigator} from './presentation/routes/BottomTabNavigator';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
