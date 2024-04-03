import { useCounter } from "../hooks/useCounter"


export const CounterWithHooks: React.FC = () => {
  const {count, increaseCount} = useCounter({});
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
