/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
// import {StackNavigator} from './StackNavigator';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {View, useWindowDimensions} from 'react-native';
import {globalColors} from '../theme/theme';
import {BottomTabNavigator} from './BottomTabNavigator';
import {IonIcon} from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimentions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
        drawerType: dimentions.width >= 758 ? 'permanent' : 'front',
        drawerActiveBackgroundColor: globalColors.secondary,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: globalColors.secondary,
        drawerItemStyle: {
          borderRadius: 10,
          paddingHorizontal: 10,
        },
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="apps-outline" color={color} size={20} />
          ),
        }}
        name="Tabs"
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="cafe-outline" color={color} size={20} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.secondary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
