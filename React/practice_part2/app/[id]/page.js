"use client";

import React ,{useState ,useEffect} from 'react';
import axios from 'axios';

const page = ({params}) => {
    const {id} = params;
  const [users , setUsers] = useState([]);
    const handleClick = async ()=>{
        
          const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/'+id)
        
        setUsers(data)
        console.log(data)
        }
        
      
    useEffect(()=>{
        handleClick()
    },[])
    
  return<>
    <h1>{JSON.stringify(users)} </h1>
    
  </>
}

export default page;