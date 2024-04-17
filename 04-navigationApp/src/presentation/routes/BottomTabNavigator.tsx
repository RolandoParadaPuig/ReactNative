/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {useColorScheme} from 'react-native';
import {globalColors} from '../theme/theme';
import {TopTabsNavigator} from './TopTabsNavigator';
import {StackNavigator} from './StackNavigator';
import {IonIcon} from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDarkMode
          ? globalColors.backgroundDark
          : globalColors.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        tabBarInactiveTintColor: globalColors.secondary,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          paddingTop: 5,
        },
      }}>
      <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: ({color}) => (
            <IonIcon name="beer-outline" color={color} size={25} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="TopTabsNavigator"
        options={{
          title: 'Tab2',
          tabBarIcon: ({color}) => (
            <IonIcon name="accessibility-outline" color={color} size={25} />
          ),
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => (
            <IonIcon name="home-outline" color={color} size={25} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
