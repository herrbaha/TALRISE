import React from 'react';

const CounterActions = ({count, setCount}) => {
  return (
    <div>
        <button onClick={() => setCount(count -1)}>Azalt (-)</button>
        <button onClick={() => setCount(count +1) }>Artir (+)</button>
    </div>
  )
}

export default CounterActions;