import {StyleSheet} from 'react-native';

export const globalColors = {
  primary: '#2F4858',
  secondary: '#0098A1',
  tertiary: '#14D0B2',
  success: '#4cc9f0',
  warning: '#fca311',
  danger: '#e71d36',
  dark: '#22223b',
  background: '#fff',
  backgroundDark: '#000',
};

export const globalThemeLight = {
  primary: globalColors.primary,
  background: globalColors.background,
  card: globalColors.dark,
  text: globalColors.backgroundDark,
  border: 'none',
  notification: globalColors.tertiary,
};

export const globalThemeDark = {
  primary: globalColors.primary,
  background: globalColors.backgroundDark,
  card: globalColors.dark,
  text: globalColors.background,
  border: 'none',
  notification: globalColors.tertiary,
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.background,
  },
  containerDark: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.backgroundDark,
  },
  primaryButton: {
    backgroundColor: globalColors.primary,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButtonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: globalColors.background,
    fontSize: 18,
  },
});
