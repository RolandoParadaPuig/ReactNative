/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {CustomView} from '../components/ui/CustomView';
import {Title} from '../components/ui/Title';
import {Button} from '../components/ui/Button';
import {Text, View} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

export const ChangeThemeScreen = () => {
  const {setTheme, currentTheme, colors} = useContext(ThemeContext);
  return (
    <CustomView margin>
      <Title text={`Current theme: ${currentTheme}`} safe />
      <View style={{marginTop: 20}} />
      <Button text="Ligth" onPress={() => setTheme('Ligth')} />
      <View style={{marginTop: 20}} />
      <Button text="Dark" onPress={() => setTheme('Dark')} />
      <View style={{marginTop: 20}} />
      <Text
        style={{
          color: colors.text,
        }}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  );
};
