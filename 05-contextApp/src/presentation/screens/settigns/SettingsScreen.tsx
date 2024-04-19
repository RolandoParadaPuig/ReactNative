import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useCounterStore} from '../../store/counter-store';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const increment = useCounterStore(state => state.increment);
  const reset = useCounterStore(state => state.resetCount);

  const count = useCounterStore(state => state.count);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: `Count: ${count}`,
    });
  }, [count, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count</Text>
      <Pressable style={styles.primaryButton} onPress={() => increment(1)}>
        <Text style={styles.primaryButtonText}>+1</Text>
      </Pressable>
      <Pressable style={styles.primaryButton} onPress={() => increment(5)}>
        <Text style={styles.primaryButtonText}>+5</Text>
      </Pressable>
      <Pressable style={styles.primaryButton} onPress={() => increment(-1)}>
        <Text style={styles.primaryButtonText}>-1</Text>
      </Pressable>
      <Pressable style={styles.primaryButton} onPress={() => increment(-5)}>
        <Text style={styles.primaryButtonText}>-5</Text>
      </Pressable>
      <Pressable style={styles.primaryButton} onPress={() => reset()}>
        <Text style={styles.primaryButtonText}>reset</Text>
      </Pressable>
    </View>
  );
};
