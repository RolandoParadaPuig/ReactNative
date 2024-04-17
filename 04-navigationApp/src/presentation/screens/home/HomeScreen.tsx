/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {View, useColorScheme} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {type NavigationProp, useNavigation} from '@react-navigation/core';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {
  NavigateScreens,
  type RootStackParams,
} from '../../routes/StackNavigator';
import {HamburguerMenu} from '../../components/shared/HamburguerMenu';

export const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const navigateTo = (to: NavigateScreens) => {
    if (to !== NavigateScreens.Product) {
      navigation.navigate(to);
    }
  };
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HamburguerMenu />,
    });
  });
  return (
    <View
      style={isDarkMode ? globalStyles.containerDark : globalStyles.container}>
      <PrimaryButton
        label={NavigateScreens.Products as unknown as string}
        onPress={() => navigateTo(NavigateScreens.Products)}
      />
      <PrimaryButton
        label={NavigateScreens.Settings as unknown as string}
        onPress={() => navigateTo(NavigateScreens.Settings)}
      />
    </View>
  );
};
