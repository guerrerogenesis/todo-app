import React, { useState, useEffect } from "react";
import "./css/App.css";
import { TodoCounter } from "./components/todoCounter";
import { TodoSearch } from "./components/todoSearch";
import { TodoList } from "./components/todoList";
import { TodoItem } from "./components/todoItem";
import { CreateTodoButton } from "./components/createTodoButton";

const defaultTodos = [
  { id: 0, text: "cortar cebolla", completed: true },
  { id: 1, text: "estudiar react", completed: false },
  { id: 2, text: "llorar con la cebolla", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  //filtrando y contabilizando los todos completados y el total de to dos
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  //funcion para la busqueda de to dos
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

  //funcion para completar to dos
  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  //funcion para eliminar to dos
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
    console.log(newTodos);
  };

  const updateTodo = (id, newText) => {
    console.log("UPDATE TODO ", id, newText);
    const newTodos = [...todos];
    newTodos[id].text = newText;
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo, index) => (
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
    </React.Fragment>
  );
}

export default App;
