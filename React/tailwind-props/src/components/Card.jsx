import React from 'react'

function Button(props) {
    
  return (
    <div>
        <button onClick={()=>{props.changeColor(props.color)}} style={{backgroundColor:props.color}} className='px-3 py-2 rounded mb-3'>{props.name}</button>
    </div>
  )
}

export default Button