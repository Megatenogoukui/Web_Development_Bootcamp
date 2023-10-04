import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../features/todos/todoSlice";

//Inittializing a Redux Store
export const Store = configureStore({
    reducer : todoReducers
})