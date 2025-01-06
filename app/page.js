"use client";

import Header from "./components/Header";
import TODOHero from "./components/TODOHero";
import TODOList from "./components/TODOList";
import Form from "./components/Form";
import { useState } from "react";


export default function Home() {

  const [todos, setTodos] = useState([
    {id: self.crypto.randomUUID(), title: 'hello', is_completed: true},
    {id: self.crypto.randomUUID(), title: 'by shoes', is_completed: true}
  ]);

  console.log(todos);

  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={0} total_todos={10}/>
      <Form />
      <TODOList todos={todos}/>
    </div>
  );
}
