import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#1C6E7D',
  ligthGray: '#9B9B9B',
  orange: '#FF9427',
  textPrimary: 'white',
  textSecondary: '#666666',
  background: '#000000',
};

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  calculatorContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
    gap: 10,
    paddingBottom: 30,
  },
  resultContainer: {
    paddingHorizontal: 30,
  },
  manResult: {
    color: colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '400',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '300',
  },
  calculatorRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    height: 70,
    width: 70,
    backgroundColor: colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '400',
  },
  buttonBlackText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '400',
  },
});
