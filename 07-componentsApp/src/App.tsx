import 'react-native-gesture-handler';
// import {
//   DarkTheme,
//   DefaultTheme,
//   NavigationContainer,
// } from '@react-navigation/native';
import React from 'react';
import {StackRoute} from './presentation/routes/StackRoute';
// import {PropsWithChildren} from 'react';
import {ThemeProvider} from './presentation/context/ThemeContext';

// const AppNavigation = ({children}: PropsWithChildren) => {
//   const {isDark} = useContext(ThemeContext);
//   return (
//     <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
//       {children}
//     </NavigationContainer>
//   );
// };

// const AppTheme = ({children}: PropsWithChildren) => {
//   return (
//     <ThemeProvider>
//       <AppNavigation>{children}</AppNavigation>
//     </ThemeProvider>
//   );
// };

export const App = () => {
  return (
    <ThemeProvider>
      <StackRoute />
    </ThemeProvider>
  );
};
