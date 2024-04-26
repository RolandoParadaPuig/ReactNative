/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {Alert} from 'react-native';
import {showPrompt} from '../../../config/adapters/propmt.adapter';
import {ThemeContext} from '../../context/ThemeContext';

export const AlertScreen = () => {
  const {isDark} = useContext(ThemeContext);
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        userInterfaceStyle: isDark ? 'dark' : 'light',
      },
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
      ],
      {
        userInterfaceStyle: isDark ? 'dark' : 'light',
      },
    );

  const onShowPrompt = () => {
    showPrompt({
      title: 'Password',
      subtitle: 'Enter password to continue',
      buttons: [
        {text: 'okey', onPress: () => console.log('ok')},
        {text: 'cancel', onPress: () => console.log('cancel'), style: 'cancel'},
      ],
      propmtType: 'secure-text',
    });
    // ! Native code
    // Alert.prompt(
    //   'Whats your email?',
    //   'lorem assd ddlkf xsaska',
    //   value => console.log(value),
    //   'secure-text',
    //   'default value',
    //   'phone-pad',
    // );
  };
  return (
    <CustomView margin>
      <Title safe text="Alerts" />
      <Button text="Alert - 2 buttons" onPress={createTwoButtonAlert} />
      <View style={{marginTop: 10}} />
      <Button text="Alert - 3 buttons" onPress={createThreeButtonAlert} />
      <View style={{marginTop: 10}} />
      <Button text="Propmt - input" onPress={onShowPrompt} />
    </CustomView>
  );
};
