import React from 'react';
import {Text, View} from 'react-native';
import {colors, globalStyles} from '../config/theme/app-theme';
import {CalculatorButton} from '../presentation/components/CalculatorButton';
import {useCalculator} from '../presentation/hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    // number,
    formula,
    prevNumber,
    buildNumber,
    clear,
    delLastDigit,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={globalStyles.resultContainer}>
        <Text
          style={globalStyles.manResult}
          adjustsFontSizeToFit
          numberOfLines={1}>
          {formula}
        </Text>
        {prevNumber === formula ? (
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={globalStyles.subResult}>
            {' '}
          </Text>
        ) : (
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={globalStyles.subResult}>
            {prevNumber}
          </Text>
        )}
      </View>
      <View style={globalStyles.calculatorRow}>
        <CalculatorButton
          onPress={clear}
          label="C"
          color={colors.ligthGray}
          blackText
        />
        <CalculatorButton
          onPress={toggleSign}
          label="+/-"
          color={colors.ligthGray}
          blackText
        />
        <CalculatorButton
          onPress={delLastDigit}
          label="del"
          color={colors.ligthGray}
          blackText
        />
        <CalculatorButton
          onPress={divideOperation}
          label="÷"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.calculatorRow}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPress={multiplyOperation}
          label="x"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.calculatorRow}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" />
        <CalculatorButton
          onPress={subtractOperation}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.calculatorRow}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPress={addOperation}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.calculatorRow}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          bigButton
        />
        <CalculatorButton onPress={() => buildNumber('.')} label="." />
        <CalculatorButton
          onPress={calculateResult}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};
