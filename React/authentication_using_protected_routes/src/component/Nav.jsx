import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='bg-indigo-500 p-3 text-white flex justify-center align-middle gap-6 mt-10 mb-6 text-2xl'>
        <Link to = {"/"} >HOME</Link>
        <Link to = {"/login"} >LOGIN</Link>
        <Link to = {"/dashboard"} >DASHBOARD</Link>
        <Link to = {"/setting"} >SETTING</Link>
    </div>
  )
}

export default Nav