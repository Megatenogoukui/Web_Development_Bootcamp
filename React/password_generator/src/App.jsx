import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [password , setPassword] = useState("");
  const [numbersAllowed , setNumbersAllowed] = useState(false);
  const [charactersAllowed , setCharactersAllowed] = useState(false)

  const passRef = useRef(null)

  const passwordChanger = useCallback(()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUBWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (numbersAllowed) str += "1234567890";
    if (charactersAllowed) str += "!@#$%^&*()";

    for (let i = 1 ; i <= length ; i++){
      const char = Math.floor(Math.random() * str.length) + 1;

      pass += str.charAt(char);
    }
    setPassword(pass);

  } , [length , numbersAllowed , charactersAllowed , setPassword])

  const copyClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{
  passwordChanger()
},[ length , numbersAllowed, charactersAllowed])

  return (
    <>
    <div className="container">
      <h1>Password Generator</h1>
      <div className="dabba">
        <input id='pass' type="text" value={password}  placeholder='Password' ref={passRef}/>
        <button onClick={copyClipboard}>COPY</button>
      </div>
      <div className="dabba">
        <input id='text' type="range" min={6} max={100} value={length} onChange={(e) =>{
          setLength(e.target.value)
        }} />
        <label className='textStyle'>Length : {length}</label>
        <input id='numberInput' type="checkbox" defaultChecked = {numbersAllowed} onChange={()=>{
          setNumbersAllowed((prev) => !prev)
        }}/>
        <label className='textStyle'>Numbers</label>
        <input id='chrInput' type="checkbox" defaultChecked = {charactersAllowed} onChange={()=>{
         setCharactersAllowed((prev) => !prev)
        }}/>
        <label className='textStyle'>Characters</label>
      </div>
    </div>
      
    </>
  )
}

export default App
