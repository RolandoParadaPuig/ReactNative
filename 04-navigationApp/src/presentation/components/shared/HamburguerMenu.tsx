/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Pressable, useColorScheme} from 'react-native';
import {IonIcon} from './IonIcon';

export const HamburguerMenu = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 5}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <IonIcon
            name="menu-outline"
            size={25}
            color={isDarkMode ? 'white' : 'black'}
          />
        </Pressable>
      ),
    });
  });

  return <></>;
};
