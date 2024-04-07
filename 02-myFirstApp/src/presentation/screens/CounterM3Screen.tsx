import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {GlobalStyles} from '../theme/Global.styles';
import {FAB} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {
  const [number, setNumber] = useState(10);

  const onPress = (num: number) => {
    setNumber(state => state + num);
  };
  const onReset = () => {
    setNumber(0);
  };
  return (
    <View style={GlobalStyles.centerContainer}>
      <Text style={GlobalStyles.title}>{number}</Text>
      <FAB
        // icon={() => <Icon name="add-outline" size={25} />}
        icon={'add'}
        // label={'+1'}
        onPress={() => onPress(+1)}
        onLongPress={() => onReset()}
        visible={true}
        // animateFrom={'right'}
        style={[GlobalStyles.fabStyle]}
      />
    </View>
  );
};
