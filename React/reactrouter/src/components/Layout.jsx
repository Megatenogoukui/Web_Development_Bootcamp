import React from 'react'
import { Link ,Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
      <nav className='flex gap-4 bg-slate-600 text-white p-4 text-3xl'>
        <Link to='/expense'> EXPENSES </Link>
        <Link to='/invoice'> INVOICE </Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout