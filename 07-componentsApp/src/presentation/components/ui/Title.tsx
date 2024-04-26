/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Text} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
}

export const Title: React.FC<Props> = ({
  text,
  safe = false,
  white = false,
}: Props) => {
  const {colors} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: 5,
        color: white ? 'white' : colors.text,
      }}>
      {text}
    </Text>
  );
};
