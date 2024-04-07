import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

export const CounterScreen = () => {
  const [number, setNumber] = useState(10);
  const onPress = (num: number) => {
    setNumber(state => state + num);
  };
  const onReset = () => {
    setNumber(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{number}</Text>
      {/* <PrimaryButton
        label="Increment"
        onPress={() => onPress(+1)}
        onLongPress={onReset}
      /> */}
      <Button
        mode="contained"
        onPress={() => onPress(+1)}
        onLongPress={onReset}>
        Increment
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
