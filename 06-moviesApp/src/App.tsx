import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNaviggator} from './presentation/routes/StackNavigator';

export const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <StackNaviggator />
    </NavigationContainer>
  );
};

export default App;
