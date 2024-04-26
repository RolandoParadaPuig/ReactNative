import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import {ThemeColors, darkColors, ligthColors} from '../../config/theme/theme';
import {AppState, Appearance} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

type ThemeColor = 'Ligth' | 'Dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  // const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('Ligth');
  const isDark = currentTheme === 'Dark';
  const colors = isDark ? darkColors : ligthColors;
  // useEffect(() => {
  //   if (colorScheme === 'dark') {
  //     setCurrentTheme('Dark');
  //   } else {
  //     setCurrentTheme('Ligth');
  //   }
  // }, [colorScheme]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', _nextAppState => {
      const colorSchemeSubs = Appearance.getColorScheme();
      setCurrentTheme(colorSchemeSubs === 'dark' ? 'Dark' : 'Ligth');
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider
        value={{
          currentTheme: currentTheme,
          colors: colors,
          isDark: isDark,
          setTheme: setTheme,
        }}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};
