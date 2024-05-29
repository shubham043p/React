import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,chaiCounter] = useState(15);
  // let counter = 15

  const addValue = ()=>{
    // console.log("clicked",counter);
    counter = counter + 1;
    chaiCounter(counter)
  }

  const removeValue = ()=>{
    chaiCounter(counter-1);
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>add value : {counter}</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
