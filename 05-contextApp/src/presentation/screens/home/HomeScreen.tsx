import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useProfileStore} from '../../store/profile-store';
import {useCounterStore} from '../../store/counter-store';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const count = useCounterStore(state => state.count);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.container}>
        <Text style={styles.title}>name: {name}</Text>
        <Text style={styles.title}>email: {email}</Text>
        <Text style={styles.title}>count: {count}</Text>
      </View>
    </View>
  );
};
