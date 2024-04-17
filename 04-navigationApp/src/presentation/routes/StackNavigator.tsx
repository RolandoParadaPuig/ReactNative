import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {ProductScreen} from '../screens/products/ProductScreen';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Product: {
    id: number;
    name: string;
  };
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();
export const StackNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerTitleAlign: 'center',
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor: isDarkMode ? '#000' : '#fff',
        },
      }}>
      <Stack.Screen name={NavigateScreens.Home} component={HomeScreen} />
      <Stack.Screen
        name={NavigateScreens.Products}
        component={ProductsScreen}
      />
      <Stack.Screen name={NavigateScreens.Product} component={ProductScreen} />
      <Stack.Screen
        name={NavigateScreens.Settings}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
};

export enum NavigateScreens {
  Home = 'Home',
  Products = 'Products',
  Product = 'Product',
  Settings = 'Settings',
}
