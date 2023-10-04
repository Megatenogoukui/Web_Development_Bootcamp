import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data , setData] = useState([])

    // useEffect(()=> {
    //     fetch("https://api.github.com/users/Megatenogoukui")
    //     .then(res => res.json())
    //     .then(res => {console.log(res);
    //     setData(res)})
    // },[])
  
  
    return (
     <div className='bg-gray-400 flex flex-col justify-center items-center p-8 m-4'>
        <h1 className='text-white text-3xl'>Github Followers : {data.public_repos}</h1>
        <img src= {data.avatar_url} alt="" width= "300px" height= "400px" />
    </div>
  )
}

export default Github


export const githubInfoLoader = async()=>{
   const response =  await fetch("https://api.github.com/users/Megatenogoukui")
   return response.json();
}