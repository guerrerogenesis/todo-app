import React, { useState, useEffect } from "react";
import "./css/App.css";
import { TodoCounter } from "./components/todoCounter";
import { TodoSearch } from "./components/todoSearch";
import { TodoList } from "./components/todoList";
import { TodoItem } from "./components/todoItem";
import { CreateTodoButton } from "./components/createTodoButton";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

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
        { id: 0, text: "Enviar mail con recursos solicitados para el CRM", completed: true },
        { id: 1, text: "Crear cuenta para nuevos usuarios", completed: false },
        { id: 2, text: "Revisar propuestas de nueva landing", completed: true },
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
      <Header />
      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            completeTodo={() => completeTodo(todo.id)}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </TodoList>

      <CreateTodoButton addTodo={addTodo} />

      <Footer />
    </>
  );
}

export default App;
