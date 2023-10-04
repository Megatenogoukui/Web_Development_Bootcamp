import React, { createContext } from 'react'
import { useState } from 'react'

export const cartContext = createContext() 

function Context({children}) {
  const [cart ,setCart] = useState([])

  return (
    <cartContext.Provider value={{cart , setCart}} >
        {children}
    </cartContext.Provider>
  )
}

export default Context