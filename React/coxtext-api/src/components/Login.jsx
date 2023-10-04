import React, { useContext, useState } from 'react'
import  UserContext  from '../context/context';

function Login() {
    const [username ,setUsername] = useState("");
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    function handleClick(e){
        e.preventDefault()
        setUser({username ,password})
    }
  return (
    <>
        <h1>LOGIN</h1>
        <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
        {"              "}
        <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleClick}>SUBMIT</button>
    </>
  )
}

export default Login