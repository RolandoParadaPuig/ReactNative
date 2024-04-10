import React from 'react';
import {Pressable, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  bigButton?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton: React.FC<Props> = ({
  label,
  color = colors.darkGray,
  bigButton,
  blackText,
  onPress,
}) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({pressed}) => ({
        ...globalStyles.button,
        opacity: pressed ? 0.75 : 1,
        width: bigButton ? 153 : 70,

        backgroundColor: color,
      })}>
      <Text
        style={
          blackText ? globalStyles.buttonBlackText : globalStyles.buttonText
        }>
        {label}
      </Text>
    </Pressable>
  );
};
