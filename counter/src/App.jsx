import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'




function App() {

  let [counter, setCounter] = useState(0);

  //let counter = 10;
  const addValue = () => {
    //  console.log("value added", counter);
      setCounter(counter+1);
  }
  const removeValue = () => {
    //console.log("value removed", counter);
    setCounter(counter-1);
}

  return (
    <>
        <h1>Another Vite Project</h1>
        <h2>Counter Value : {counter}</h2>
        <button
        onClick={addValue}>Add Value</button>
        <button
        onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
