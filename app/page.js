"use client";

import Header from "./components/Header";
import TODOHero from "./components/TODOHero";
import TODOList from "./components/TODOList";
import Form from "./components/Form";
import { useState } from "react";
import { useEffect } from "react";


export default function Home() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, [])

  const todos_completed = todos.filter( (todo) => todo.is_completed === true).length;

  const totals_todos = todos.length;

  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={totals_todos}/>
      <Form todos={todos} setTodos={setTodos}/>
      <TODOList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
