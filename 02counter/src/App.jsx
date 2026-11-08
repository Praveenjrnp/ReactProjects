import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15;

  let addValue = () => {
    // console.log("Clicked", counter);
    // counter = counter + 1;
    setCounter(counter + 1);    
  }

  let decValue= () => {
    // console.log("Clicked", counter);
    setCounter(counter - 1);
  }
  return (
    <>
     <h1>Hello, Vite!</h1>
     <h2> Counter value : {counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <br/>
     <button onClick={decValue}>Decrease Value</button>

    </>
  )
}

export default App
