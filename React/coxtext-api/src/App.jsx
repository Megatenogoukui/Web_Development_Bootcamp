import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Porfile from './components/Porfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Welcome to Context API</h1>
      <Login />
      <Porfile />
    </UserContextProvider>
  )
}

export default App
