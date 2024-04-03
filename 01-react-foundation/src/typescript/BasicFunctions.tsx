import React from 'react'

export const BasicFunctions: React.FC = () => {

  const addTwoNumbers = ( a: number, b: number ): number => {
    return a + b;
  };

  return (
    <>
      <h3>Functions</h3>
      <span>Result of adding two numbers: { addTwoNumbers(2, 8) }</span>
    </>
  )
}
