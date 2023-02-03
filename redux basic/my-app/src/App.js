import React from 'react';
// import {useState} from 'react';
import Counter from './components/Counter';
import CounterActions from './components/CounterActions';
import { useSelector } from "react-redux";

function App() {
  // const [ count, setCount] = useState(0)
  const { isimler } = useSelector((state) => state.isimler)
  const { sayilar } = useSelector((state) => state.sayilar)

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
