/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator: React.FC<Props> = ({style}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View style={{backgroundColor: colors.cardBackground}}>
      <View
        style={[
          {
            alignSelf: 'center',
            backgroundColor: colors.text,
            opacity: 0.1,
            height: 1,
            width: '90%',
          },
          style,
        ]}
      />
    </View>
  );
};
