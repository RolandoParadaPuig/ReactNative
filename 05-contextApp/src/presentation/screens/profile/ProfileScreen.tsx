import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useProfileStore} from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({name: 'Rolando Parada'})}>
        <Text>Change Name</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() =>
          useProfileStore.setState({email: 'Rolando.Parada@gmail.com'})
        }>
        <Text>Change Email</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('jhon Doe', 'jhon.doe@yopmail.com')}>
        <Text>Back to Jhon</Text>
      </Pressable>
    </View>
  );
};
