import { useContext ,createContext } from "react";

export const ToDoContext = createContext({
    todos: [{
        id: 1 , 
        todo : "toDo msg",
        completed : false
    }],
    updateToDo : (id,todo) => {} ,
    addToDo : (todo) => {} ,
    toggleComplete : (id) => {},
    deleteToDo : (id ,todo) => {}
});

export function  useToDo(){
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider