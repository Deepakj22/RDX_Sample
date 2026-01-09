import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContex';

const CounterActions : React.FC = () => {
  const countContext = useContext(CounterContext);


  return (
    <div>
       <button onClick={() => countContext?.setCount(prevCount => prevCount + 1)}>Increment</button>
       <button onClick={() => countContext?.setCount(prevCount => prevCount - 1)}>Decrement</button>
    </div>
  )
}

export default CounterActions
