import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import {CalculatorScreen} from './screens/CalculatorScreen';
import {colors, globalStyles} from './config/theme/app-theme';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.background : colors.ligthGray,
  };

  return (
    <View style={[backgroundStyle, globalStyles.background]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <CalculatorScreen />
    </View>
  );
}

export default App;
