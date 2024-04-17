import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './presentation/routes/StackNavigator';
import {useColorScheme} from 'react-native';
import {globalThemeDark, globalThemeLight} from './presentation/theme/theme';
import {SideMenuNavigator} from './presentation/routes/SideMenuNavigator';
// import {BottomTabNavigator} from './presentation/routes/BottomTabNavigator';

export const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer
      theme={{
        dark: isDarkMode,
        colors: isDarkMode ? globalThemeDark : globalThemeLight,
      }}>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
};
