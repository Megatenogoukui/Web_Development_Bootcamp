import React from 'react'
import { useParams } from 'react-router-dom'

function Random() {
    const { id } = useParams()
  return (
    <div>Random Id : {id} </div>
  )
}

export default Random