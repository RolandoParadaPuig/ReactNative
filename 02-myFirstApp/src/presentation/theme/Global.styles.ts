import {StyleSheet, Platform} from 'react-native';

export const GlobalStyles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: '300',
    color: 'black',
  },
  fabStyle: {
    bottom: Platform.OS === 'android' ? 16 : 0,
    right: 16,
    position: 'absolute',
  },
});
