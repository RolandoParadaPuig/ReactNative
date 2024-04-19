import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface props {
  name: string;
  size?: number;
  color?: string;
}
export const IonIcon = ({name, size = 20, color = 'black'}: props) => {
  return <Icon name={name} size={size} color={color} />;
};
