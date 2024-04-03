import { useState } from "react";

interface Options {
  initalValue?: number
}

export const useCounter = ({ initalValue = 0 }: Options) => {

  const [count, setCount] = useState<number>(initalValue);

  const increaseCount = (value: number) => {
    if (count + value < 0) return;
    setCount((state) => state + value);
  };

  return {
    // Properties
    count,

    // Methods
    increaseCount
  }
}
