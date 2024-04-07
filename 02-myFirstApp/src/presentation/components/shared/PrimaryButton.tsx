import React from 'react';
import {
  Platform,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from 'react-native';

interface Props extends PressableProps {
  label: string;
}

export const PrimaryButton: React.FC<Props> = ({label, ...props}) => {
  return (
    <Pressable
      {...props}
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
  buttonText: {
    color: 'white',
  },
});
