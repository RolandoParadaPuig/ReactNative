import React, {ReactNode, useContext} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  margin?: boolean;
}

export const CustomView: React.FC<Props> = ({
  children,
  style,
  margin = false,
}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View
      style={[
        globalStyles.mainContainer,
        {
          backgroundColor: colors.background,
        },
        style,
        margin && globalStyles.globalMargin,
      ]}>
      {children}
    </View>
  );
};
