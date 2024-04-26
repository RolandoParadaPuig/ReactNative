import {useRef} from 'react';
import {Animated, Easing, PanResponder} from 'react-native';

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({duration = 300, toValue = 1, callback = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeOut = ({duration = 300, toValue = 0, callback = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
    // }).start(() => animatedTop.resetAnimation());
  };

  const startMovingTop = ({
    toValue = 0,
    duration = 300,
    initialPosition = 0,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing,
    }).start(callback);
  };
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false,
      },
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }, // Back to zero
      ).start();
    },
  });
  return {
    // properties
    animatedOpacity,
    animatedTop,
    panResponder,
    pan,
    // methods
    fadeIn,
    fadeOut,
    startMovingTop,
  };
};
