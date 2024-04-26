/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Text} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor?: string;
}

export const Subtitle: React.FC<Props> = ({text, safe = false}: Props) => {
  const {colors} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        color: colors.text,
        marginTop: safe ? top : 0,
        marginBottom: 10,
      }}>
      {text}
    </Text>
  );
};
