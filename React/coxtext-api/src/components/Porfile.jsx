import React, { useContext } from 'react'
import UserContext  from '../context/context'

function Porfile() {


  const {user} = useContext(UserContext)
  
    if (!user) return <h2>PLEASE LOGIN</h2>
    return <h2>Welcome {user.username}</h2>
}

export default Porfile