"use client";

import React ,{useEffect, useState} from 'react';
import axios from 'axios'
  

  

const page = () => {
  const [users , setUsers] = useState([]);


  const handleClick = async ()=>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/')
    setUsers(data)
    console.log(data)
  }

  useEffect(()=>{
    handleClick()
},[])

  return <div className = 'p-8'>
    <button onClick={handleClick} className='bg-green-600 text-white px-4 py-2 rounded'>GET DATA</button>
    <div className='p-9 bg-slate-200 mt-5'>
      <ul>
        {users.map((e)=> {
          return <li>{e.username} --- <a href= {`${e.id}`}>EXPLORE</a> </li>
        })}
      </ul>
    </div>
  </div>
}

export default page;