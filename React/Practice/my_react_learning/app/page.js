"use client";

import React ,{useState} from 'react';

const page = () => {
  const [marks,setMarks] = useState(80)
  function updateMarks(){
    setMarks(30)
  }
  return (
    < >
      <h1 className='font-bold text-xl' >My marks were {marks}</h1>
      <button onClick = {updateMarks}className='bg-gray-400 px-5 py-5 mt-3 text-xl font-bold rounded'>Update</button>
    </>
    
  )
}

export default page;