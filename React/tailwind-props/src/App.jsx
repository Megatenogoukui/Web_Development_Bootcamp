import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Card'

function App() {
  const [color, setColor] = useState("white")

  function changeColor(color){
    setColor(color)
  }
  return (
    <div style={{backgroundColor:color}} className='w-screen h-screen flex justify-center align-middle'>
    <Button name = "Red" color = "red" changeColor = {changeColor} /> 
    <Button name = "Blue" color = "blue"  changeColor = {changeColor}/>      
    </div>
  )
}

export default App
