import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../Context'
import SingleProduct from './SingleProduct'

function Cart() {
    const {cart ,setCart} = useContext(cartContext)
    const [total ,setTotal] = useState(0)

    useEffect(() => {setTotal(cart.reduce((acc,curr) => acc + Number(curr.price),0))},[cart])
  return (
    <div className='m-4'>
        <h1 className='text-2xl my-2'>MY CART</h1>
        <span className='text-2xl'>TOTAL : RS.{total}</span>

        {cart.map((prod,index) => {
            return (
            <div >
                 <SingleProduct  prod = {prod} key = {index} />
             </div>
           
            
            )
        })}
    </div>
  )
}

export default Cart