import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import { TodoItems } from "./components";
import { TodoForm } from "./components";

function App() {
  const [todos, setTodos] = useState([]); // todos is array of todo

  // add todo
  const addTodo = (todo) => {
    console.log(todo); // todo = {msg,toggle}
    console.log(todos); // all todos]
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // update todo
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      //loop
      prev.map((eachValue) =>
        eachValue.id === id ? (eachValue = todo) : eachValue
      )
    );
  };

  // delete todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // toggle complete
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, complete: !prevTodo.complete }
          : prevTodo
      )
    );
  };

  // local storage

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItems todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
