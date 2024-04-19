/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {HomeScreen} from '../screens/home/HomeScreen';
import {SettingsScreen} from '../screens/settigns/SettingsScreen';
import {IonIcon} from '../../components/shared/IonIcon';

const Tab = createMaterialBottomTabNavigator();

export const MaterialBottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: () => <IonIcon name="home-outline" />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <IonIcon name="person-outline" />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <IonIcon name="settings-outline" />,
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};
