import './App.css';
import Header from './components/header';
import React, { useState } from 'react';

function App() {
  const [myNum, setNum] = useState(1)

  function inc(){
    setNum(myNum + 1)
  }
  function dec(){
    setNum(myNum - 1)
  }
  return (
    <div className="App">
      <Header/>
      <div className='main'>
        <h1 className='heading'>{myNum}</h1>
        <div className='buttons'>
        <button className='btn' onClick={inc}>increment</button>
        <button className='btn'onClick={dec}>decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
