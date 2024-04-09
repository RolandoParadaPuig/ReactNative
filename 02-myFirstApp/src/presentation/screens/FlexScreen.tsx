import React from 'react';
import {StyleSheet, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.conainer}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  // parent flex container
  conainer: {
    flex: 1,
    backgroundColor: 'grey',
  },
  // childrens flex items
  box1: {
    backgroundColor: '#5856d6',
    flex: 1, // 1 / (1 + 2 + 3) -> 1/6
  },
  box2: {
    backgroundColor: '#4644d6',
    flex: 2, // 2 / (1 + 2 + 3) -> 1/3
  },
  box3: {
    backgroundColor: '#3230d2',
    flex: 3, // 3 / (1 + 2 + 3) -> 1/2
  },
});
