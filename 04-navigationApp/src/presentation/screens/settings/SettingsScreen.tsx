/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, useColorScheme} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/core';

export const SettingsScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigator = useNavigation();
  return (
    <View
      style={!isDarkMode ? globalStyles.container : globalStyles.containerDark}>
      <Text style={{marginBottom: 20}}>Settings Screen</Text>
      <PrimaryButton label="Back" onPress={() => navigator.goBack()} />
      <PrimaryButton
        label="Go home"
        onPress={() => navigator.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
