import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {HomeWorkScreen} from './src/presentation/screens';
// import {FlexDirectionScreen} from './src/presentation/screens';
// import {FlexScreen} from './src/presentation/screens';
// import {PositionScreen} from './src/presentation/screens';
// import {DimentionScreen} from './src/presentation/screens';
// import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
// import {CounterScreen} from './src/presentation/screens/CounterScreen';
// import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
// import {BoxObjectModelScreen} from './src/presentation/screens';

export const App = () => {
  return (
    <PaperProvider settings={{icon: props => <IonIcon {...props} />}}>
      <SafeAreaView style={styles.saveAreStyles}>
        {/* <HelloWorldScreen name="Rolando Parada Puig" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimentionScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        <HomeWorkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  saveAreStyles: {
    flex: 1,
    backgroundColor: 'white',
  },
});
