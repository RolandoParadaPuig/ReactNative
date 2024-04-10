import {useEffect, useRef, useState} from 'react';

enum Operator {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = 'x',
  DIVIDE = '÷',
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  const [formula, setFormula] = useState('');
  const lasOperator = useRef<Operator>();

  useEffect(() => {
    if (lasOperator.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lasOperator.current} ${number}`);
    } else {
      setFormula(number);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);
  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(`${subResult}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formula]);

  const buildNumber = (numberString: string) => {
    // avoid multiple decimal points on the number
    if (number.includes('.') && numberString === '.') {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      // decimal point
      if (numberString === '.') {
        return setNumber(state => state + numberString);
      }
      if (numberString === '0' && number.includes('.')) {
        return setNumber(state => state + numberString);
      }
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(state => state.replace('0', numberString));
      }
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
      return setNumber(state => state + numberString);
    }
    setNumber(state => state + numberString);
  };
  const clear = () => {
    setNumber('0');
    setPrevNumber('0');
    lasOperator.current = undefined;
    setFormula('0');
  };
  const delLastDigit = () => {
    if (!number.includes('-') && number.length > 1) {
      return setNumber(state => state.slice(0, state.length - 1));
    }
    if (number.includes('-') && number.length > 2) {
      return setNumber(state => state.slice(0, state.length - 1));
    }
    if (number === '0') {
      return;
    }
    setNumber('0');
  };
  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(state => state.replace('-', ''));
    }
    setNumber(state => '-' + state);
  };
  const setLastNumber = () => {
    calculateResult();
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };
  const divideOperation = () => {
    setLastNumber();
    lasOperator.current = Operator.DIVIDE;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lasOperator.current = Operator.MULTIPLY;
  };
  const subtractOperation = () => {
    setLastNumber();
    lasOperator.current = Operator.SUBTRACT;
  };
  const addOperation = () => {
    setLastNumber();
    lasOperator.current = Operator.ADD;
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);
    lasOperator.current = undefined;
    setPrevNumber('0');
  };

  const calculateSubResult = (): number => {
    const [firstValue, operation, secondValue] = formula.split(' ');
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);
    if (isNaN(num2)) {
      return num1;
    }
    switch (operation) {
      case Operator.ADD:
        return num1 + num2;
      case Operator.SUBTRACT:
        return num1 - num2;
      case Operator.MULTIPLY:
        return num1 * num2;
      case Operator.DIVIDE:
        return num1 / num2;
      default:
        throw new Error('Operator not implemented');
    }
  };

  return {
    // Properties
    number,
    prevNumber,
    formula,
    // Methods
    buildNumber,
    clear,
    delLastDigit,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  };
};
