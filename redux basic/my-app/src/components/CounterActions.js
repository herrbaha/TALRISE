import React from 'react';
import { decrement, increment, deleteByAmount } from '../stores/counterSlice';
import { useDispatch } from 'react-redux'


const CounterActions = ({count, setCount}) => {
  const dispatch = useDispatch()
  return (
    <div>
        <button 
        // onClick={() => setCount(count -1)}
        onClick={()=> dispatch(decrement())}
        >Azalt (-)</button>
        <button 
        onClick={()=> dispatch(increment())}
        // onClick={() => setCount(count +1) }
        >Artir (+)</button>
      <button 
      onClick={() => dispatch(deleteByAmount())}>0</button>
    </div>
  )
}

export default CounterActions;