import { createSlice ,nanoid } from "@reduxjs/toolkit";

//Creating an Initial State
const initialState = {
    todos : [
        {
            id : 1,
            text : "Heloo"
        }
    ]
}

//Creating a Slice (Basically a bigger version of reducers)
const todoSlice = createSlice({
    name : "todo",
    initialState,
    //Reducers are nothing but object that includes many functions
    reducers: {
        //Creating a function for adding a new todo
        addTodo : (state ,actions) => {
            const newTodo = {
                id : nanoid(),
                text : actions.payload
            }
            state.todos.push(newTodo)
        },
        //Creating a function for removing a todo
        removeTodo :  (state , actions) => {
            state.todos = state.todos.filter((todo) => {
               return todo.id !== actions.payload
            })
        }


    }
})

//Exporting

//Exporting the individual reducers for the components
export const {addTodo ,removeTodo} = todoSlice.actions

//Exporting the entire Reducers object for the store
export default todoSlice.reducer