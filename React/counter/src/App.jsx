import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increaseCount(){
    if (count < 20){
      setCount(count + 1);
    }
    
  }
  function decreaseCount(){
    if (count > 0){
      setCount(count - 1);
    }
  }



  return (
    <>
      <h1>HELLO GUYSSSS</h1>
      <h2>COUNT : {count} </h2>
      <button onClick = {increaseCount}>ADD</button>
      <button onClick = {decreaseCount} >REMOVE</button>
    </>
  )
}

export default App
