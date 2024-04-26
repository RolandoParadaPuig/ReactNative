/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Card} from '../../components/ui/Card';
import {globalStyles} from '../../../config/theme/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {ThemeContext} from '../../context/ThemeContext';

export const TextInputScreen = () => {
  const {colors} = useContext(ThemeContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <ScrollView>
        <CustomView margin>
          <Title text="Text Input" safe />
          <Card>
            <TextInput
              style={[globalStyles.input, {color: colors.text}]}
              placeholder="Full Name"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={value =>
                setForm(state => ({...state, name: value}))
              }
            />
            <TextInput
              style={[globalStyles.input, {color: colors.text}]}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value =>
                setForm(state => ({...state, email: value}))
              }
            />
            <TextInput
              style={[globalStyles.input, {color: colors.text}]}
              placeholder="Phone"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={value =>
                setForm(state => ({...state, phone: value}))
              }
            />
          </Card>
          <View style={{marginTop: 10}} />
          <Card>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
          </Card>
          <View style={{marginTop: 10}} />

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Full Name"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={value =>
                setForm(state => ({...state, name: value}))
              }
            />
          </Card>
          <View style={{marginTop: 20}} />
        </CustomView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
