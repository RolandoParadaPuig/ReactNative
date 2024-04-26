import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {Animation101Screen} from '../screens/animations/Animation101Screen';
import {Animation102Screen} from '../screens/animations/Animation102Screen';
import {SwitchScreen} from '../screens/switches/SwitchScreen';
import {AlertScreen} from '../screens/alerts/AlertScreen';
import {TextInputScreen} from '../screens/inputs/TextInputScreen';
import {PullToRefreshScreen} from '../ui/PullToRefreshScreen';
import {CustomSectionListScreen} from '../ui/CustomSectionListScreen';
import {ModalScreen} from '../ui/ModalScreen';
import {InfiniteScrollScreen} from '../ui/InfiniteScrollScreen';
import {SlidesScreen} from '../ui/SlidesScreen';
import {ChangeThemeScreen} from '../ui/ChangeThemeScreen';
import {ThemeContext} from '../context/ThemeContext';

const Stack = createStackNavigator();

export const StackRoute = () => {
  const {colors} = useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* Animations */}
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      {/* Items */}
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      {/* Ui */}
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
      />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
      />
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
    </Stack.Navigator>
  );
};
