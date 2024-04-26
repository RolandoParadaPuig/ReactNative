/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren, useContext} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card: React.FC<Props> = ({style, children}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          borderRadius: 10,
          padding: 10,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
