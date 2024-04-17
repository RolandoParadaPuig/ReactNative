import React from 'react';
import {Pressable, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';

interface Props {
  onPress: () => void;
  label: string;
}

export const PrimaryButton: React.FC<Props> = ({onPress, label}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        globalStyles.primaryButton,
        pressed ? globalStyles.primaryButtonPressed : undefined,
      ]}>
      <Text numberOfLines={1} style={globalStyles.buttonText}>
        {label}
      </Text>
    </Pressable>
  );
};
