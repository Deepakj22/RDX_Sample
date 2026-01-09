import React from 'react'
import  { useContext } from 'react'
import CounterActions from './components/CounterActions';
import { CounterContext } from './context/CounterContex';

const RenderCounter : React.FC = () => {
  const counter = useContext(CounterContext);

    if (!counter) {
        return <div>Loading...</div>; // or some fallback UI
    }
  return (
    <div className="App">
      <h1 style={{fontFamily:"sans-serif"}}>
        Count is : {counter.count}
        </h1>
          <CounterActions/> 
    </div>
  )
}

export default RenderCounter
