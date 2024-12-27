import React, { useState, useEffect } from "react";
import "./css/App.css";
import { TodoCounter } from "./components/todoCounter";
import { TodoSearch } from "./components/todoSearch";
import { TodoList } from "./components/todoList";
import { TodoItem } from "./components/todoItem";
import { CreateTodoButton } from "./components/createTodoButton";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // Recuperar los todos desde localStorage al cargar la app

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos)); // Parsear los datos guardados
    } else {
      const defaultTodos = [
        { id: 0, text: "cortar cebolla", completed: true },
        { id: 1, text: "estudiar react", completed: false },
        { id: 2, text: "llorar con la cebolla", completed: true },
      ];
      setTodos(defaultTodos);
    }
  }, []);

  // Guardar los todos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const addTodo = (newText) => {
    const newTodos = [...todos];
    newTodos.push({ id: Math.random(), text: newText, completed: false });
    setTodos(newTodos);
  };

  const updateTodo = (id, newText) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;
    setTodos(newTodos);
  };

  return (
    <>
      {/* <div className="fixed top-0 left-0 w-full h-1/5 "> */}
        <TodoCounter total={totalTodos} completed={completedTodos} />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      {/* </></div> */}
    
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            completeTodo={() => completeTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
            updateTodo={updateTodo}
          />
        ))}
      </TodoList>

      <CreateTodoButton addTodo={addTodo} />
    </>
  );
}

export default App;
