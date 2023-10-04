import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <h1 className='text-3xl text-center my-4'>CREATE CONTEXT API</h1>
        <nav>
            <ul className='flex justify-center align-middle gap-12 bg-indigo-500 p-4 text-2xl'>
                <li>
                    <Link to = '/' >HOME</Link>
                </li><li>
                    <Link to = '/cart' >CART</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Header