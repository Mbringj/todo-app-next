import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

function Item({ item, todos, setTodos}) {

  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  
  const completeTodo = () => {

    setTodos(
      (prevTodos) => prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );

    // update the todo in localstorage

    const updatedTodos = JSON.stringify(todos);

    localStorage.setItem("todos", updatedTodos);
  };

  const handleEdit = () => {
    setEditing(true);
  }

  useEffect(() => {

    if(editing && inputRef.current) {
      inputRef.current.focus();
      // position the cursor at the end the text

      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        input.current.value.length
      );
    }
  }, [editing]);

  const handleInputSubmit = (event) => {
    event.preventDefault();
    const updatedTodos = JSON.stringify(todos);

    localStorage.setItem("todos", updatedTodos);
    setEditing(false);
  }

  const handleInputBlur = () => {
    const updatedTodos = JSON.stringify(todos);

    localStorage.setItem("todos", updatedTodos);
    setEditing(false);
  }

  const handleInputChange = (e) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => 
        todo.id === item.id ? {...todo, title: e.target.value }: todo
      )
    );
  };

  const handleDelete = () => {
    setTodos((prevTodos) => 
      prevTodos.filter((todo) => todo.id !== item.id)
    );
    // Update localStorage after deleting todo

    const updatedTodos = JSON.stringify(
      todos.filter(
        (todo) => todo.id !== item.id
      )
    );

    localStorage.setItem("todos", updatedTodos)
  };

  return (
    <li id={item?.id} className="todo_item">
      { editing ? (
        <form className="edit-form" onSubmit={handleInputSubmit}>
          <label htmlFor="edit-todo">
            <input 
              type="text" 
              name="edit-todo" 
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange} 
            />
          </label>
        </form>
      ):(
      <>
        <button className="todo_items_left" onClick={completeTodo}>
          <svg fill={item.is_completed ? "#22C55E": "#0d0d0d"}>
            <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
          </svg>
          <p style={item.is_completed ? {textDecoration: "line-through"}: {}}>{item?.title}</p>
        </button>
        <div className="todo_items_right">
          <button onClick={handleEdit}>
            <span className="text-color">Edit</span>
            <svg>
              <path d="" />
            </svg>
          </button>
          <button onClick={handleDelete}>
            <span className="text-color">Delete</span>
            <svg>
              <path d="" />
            </svg>
          </button>
        </div>  
      </>
      )}
    </li>
  )
}

function TODOList({todos, setTodos}) {

  return (
    <ol className="todo_list">
      { todos && todos.length > 0 ? (
          todos?.map((item, index) => <Item key={index} item={item} todos={todos} setTodos={setTodos}/>)
        ):
        (<p>tu n'as pas de tache en cours</p>)
      } 
    </ol>
  );
}

export default TODOList;