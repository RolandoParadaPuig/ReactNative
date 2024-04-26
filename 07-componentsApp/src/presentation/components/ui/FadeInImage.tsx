/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage: React.FC<Props> = ({uri, style}: Props) => {
  const {animatedOpacity, fadeIn} = useAnimation();
  const [loading, setLoading] = useState(true);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {loading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color={'grey'}
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={() => {
          fadeIn({duration: 100});
          setLoading(false);
        }}
        style={[style, {opacity: animatedOpacity}]}
      />
    </View>
  );
};
