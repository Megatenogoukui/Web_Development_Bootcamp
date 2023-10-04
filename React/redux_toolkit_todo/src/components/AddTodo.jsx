import React, { useState } from 'react'
import { addTodo } from '../features/todos/todoSlice'
import { useDispatch } from 'react-redux'

function AddTodo() {
  
  const [input ,setInput] = useState('')
  const dispatch = useDispatch()

  function addTodoHandler(e){
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  }

  return (
    <div>
        <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
            <input 
            type='text'
            className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus: ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
            placeholder= "Enter a ToDo ..."  
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button 
            type='submit'
            className='text-white bg-indigo-500 border- py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
            >
            ADD TODO
            </button>
        </form>
    </div>
  )
}

export default AddTodo