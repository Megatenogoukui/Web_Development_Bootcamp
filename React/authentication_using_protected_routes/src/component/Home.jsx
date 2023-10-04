import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Nav from './Nav'

function Home() {
  return (
    <main>
    <h1 className='text-3xl text-center my-4 w-80 mx-auto rounded text-gray-500 bg-yellow-400 p-1'>Authentication</h1> 
    <div >
        <Nav />
    </div>
    <div className='flex justify-center p-4 text-center text-2xl'>
        <Outlet /> 
    </div>
      
    </main>

  )
}

export default Home