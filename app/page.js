"use client";

import Header from "./components/Header";
import TODOHero from "./components/TODOHero";
import TODOList from "./components/TODOList";
import Form from "./components/Form";


export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={0} total_todos={0}/>
      <Form />
      <TODOList todos={[]}/>
    </div>
  );
}
