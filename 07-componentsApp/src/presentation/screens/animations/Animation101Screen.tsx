/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {StyleSheet, Animated, Easing} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';
import {CustomView} from '../../components/ui/CustomView';
import {Button} from '../../components/ui/Button';
import {ThemeContext} from '../../context/ThemeContext';

export const Animation101Screen = () => {
  const {colors} = useContext(ThemeContext);
  const {animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTop} =
    useAnimation();

  return (
    <CustomView style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
            backgroundColor: colors.primary,
          },
        ]}
      />
      <Button
        text={'Fade In'}
        onPress={() => {
          fadeIn({});
          startMovingTop({
            initialPosition: -150,
            easing: Easing.bounce,
            duration: 750,
          });
        }}
        styles={{marginTop: 10}}
      />
      <Button
        text={'Fade Out'}
        onPress={() => fadeOut({})}
        styles={{marginTop: 10}}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
