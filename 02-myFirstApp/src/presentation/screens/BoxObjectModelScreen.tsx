import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
// import {Text} from 'react-native-paper';

type Props = {};

export const BoxObjectModelScreen = (props: Props) => {
  const {} = props;
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObject</Text> */}
      <View style={styles.purpleBox} />
      <View style={styles.purpleBox}>
        <Text>hola mundo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
  },
  title: {
    fontSize: 30,
    padding: 2,
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderWidth: 5,
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    // margin: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 5,
  },
});
