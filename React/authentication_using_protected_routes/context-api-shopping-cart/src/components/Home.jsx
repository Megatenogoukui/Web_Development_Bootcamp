import React, { useState } from 'react'
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';

faker.seed(4321);
function Home() {

    const productArray = [...Array(20)].map(()=>({
        

        id :   faker.string.uuid(),
        name: faker.commerce.productName(),
        price : faker.commerce.price(),
        avatar: faker.image.avatar(),

    }))
    
    const [products] = useState(productArray)
  return (
    <div className='flex flex-wrap justify-center align-middle'>
        {products.map((prod ,index) => {
            return (
            <div >
                 <SingleProduct  prod = {prod} key = {index} />
             </div>
           
            
            )
        })}
    </div>
  )
}

export default Home