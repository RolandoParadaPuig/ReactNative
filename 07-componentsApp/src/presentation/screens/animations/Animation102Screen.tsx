import React from 'react';
import {StyleSheet, Animated} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';
import {CustomView} from '../../components/ui/CustomView';

export const Animation102Screen = () => {
  const {pan, panResponder} = useAnimation();
  return (
    <CustomView style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]}
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
  box: {
    backgroundColor: '#61dafb',
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});
