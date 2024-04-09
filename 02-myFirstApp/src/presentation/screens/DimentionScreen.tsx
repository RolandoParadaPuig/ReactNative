import React from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {Text} from 'react-native-paper';

// const {width, height} = Dimensions.get('window');

export const DimentionScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            width: width / 2,
          }}
        />
      </View>
      <Text style={styles.title}>
        W: {width} - H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 300,
    width: 300,
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    height: '50%',
    width: '50%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
