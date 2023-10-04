import { useEffect, useState } from "react";

import "./App.css";
import { ToDoProvider } from "./context";
import TodoForm from "./components/ToDoForm";
import TodoItem from "./components/ToDoItem";

function App() {
  const [todos, setTodos] = useState([]);

  function addToDo(todo) {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    console.log(todo)
  }
  function updateTodo(id, todo) {
    setTodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prev))
    );
  }
  function deleteToDo(id) {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id));
  }
  function toggleComplete(id, to) {
    setTodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    );
  }

  useEffect(() => {
    try {
      const todos = JSON.parse(localStorage.getItem("todos"));
      if (todos && todos.length > 0) {
        setTodos(todos);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoProvider
      value={{ todos, updateTodo, addToDo, toggleComplete, deleteToDo }}
    >
      <div className="bg-[#172842] min-h-screen py-8 w-full " >
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                {" "}
                {/* Add key prop */}
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
