import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    // todo: homework

    // solution to - Tarea-2 & Tarea-3
    // flexDirection: 'column',
    // justifyContent: 'center',
    // ---------------------

    // solution to - Tarea-4 & Tarea-6
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // ---------------------

    // solution to - Tarea-5
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // ---------------------

    // solution to - Tarea-7 & Tarea-8 & Tarea-9
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // ---------------------

    // solution to - Tarea-7 & Tarea-8 & Tarea-9
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // ---------------------
  },
  box: {
    width: 100,
    height: 100,
    // solution to - Tarea-5
    // height: '100%',
    // ---------------------
    // solution to - Tarea-6
    // width: '100%',
    // ---------------------
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    // solution to - Tarea-3 && Tarea-4
    // alignSelf: 'flex-end',
    // ---------------------
    // solution to - Tarea-6
    // flex: 1,
    // ---------------------
    // solution to - Tarea-9
    // top: 100,
    // ---------------------
  },
  orangeBox: {
    backgroundColor: '#F0a23B',
    // solution to - Tarea-1
    // flex: 1,
    // ---------------------
    // solution to - Tarea-4
    // alignSelf: 'center',
    // ---------------------
    // solution to - Tarea-6
    // flex: 1,
    // ---------------------
    // solution to - Tarea-8 & Tarea-9
    // left: 100,
    // ---------------------
    // solution to - Tarea-10
    top: 50,
    // ---------------------
  },
  blueBox: {
    backgroundColor: '#28C4D9',
    // solution to - Tarea-2
    // width: '100%',
    // ---------------------

    // solution to - Tarea-3
    // alignSelf: 'center',
    // ---------------------
    // solution to - Tarea-6
    // flex: 2,
    // ---------------------
  },
});
