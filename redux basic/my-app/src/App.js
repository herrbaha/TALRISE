import React from 'react';
// import {useState} from 'react';
import Counter from './components/Counter';
import CounterActions from './components/CounterActions';

function App() {
  // const [ count, setCount] = useState(0)
  return (
    <div >
      <Counter 
      // count = {count} 
      />
      <CounterActions 
      // count = {count} setCount = {setCount}
      />
    </div>
  );
}

export default App;
