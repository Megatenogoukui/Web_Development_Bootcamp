import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-500 text-white p-8 text-3xl flex justify-center align-middle'>User : {userid}</div>
  )
}

export default User