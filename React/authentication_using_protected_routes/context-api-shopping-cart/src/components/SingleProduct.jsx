import React, { useContext } from 'react'
import { cartContext } from '../Context'

function SingleProduct({prod }) {
 const {cart ,setCart} = useContext(cartContext)
  return (
    <div className='bg-gray-200 p-5 rounded flex mx-10 my-5 flex-col justify-center align-middle'>
                <h3> ID : {prod.id}</h3>
                <h3> NAME : {prod.name}</h3>
                <h3> PRICE : {prod.price.substring(0,3)}</h3>
                <img src= {prod.avatar} alt="" width= "80px" height= "100px"/>
                {cart.includes(prod)? <button onClick={() => setCart(cart.filter((c) => c.id !== prod.id))} className='p-3 m-3 bg-indigo-200'>REMOVE FROM CART</button>:<button onClick={() => setCart([...cart,prod])} className='p-3 m-3 bg-indigo-200'>ADD TO CART</button>  }
                
               
            </div>
  )
  

}

export default SingleProduct