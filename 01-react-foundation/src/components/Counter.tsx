import React, { useState } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(10);
  const increaseCount = (value: number) => {
    setCount((state) => state + value);
  };
  return (
    <>
      <h3>Counter: <small>{ count }</small></h3>
      <div>
        <button onClick={() => increaseCount(1)}>
          +1
        </button>
        &nbsp;
        <button onClick={() => increaseCount(-1)}>
          -1
        </button>
      </div>
    </>
  )
}
