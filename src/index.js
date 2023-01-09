import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";

const App = () => {
  const INITIAL_STATE = [];
  const [todo, setTodo] = useState(INITIAL_STATE);
  const [newTodo, setNewTodo] = useState(" ");

  const removeTodo = (id) => {
    const newList = todo.filter((l) => l.id !== id);
    setTodo(newList);
  };

  const deneme = (e) => {
    if (newTodo === " ") {
      alert("Please Enter a to-do !");
    } else {
      setTodo([...todo, { name: newTodo, id: Date.now(), completed: false }]);
      setNewTodo("");
    }
  };
  return (
    <div className='container-todo'>
      <form onSubmit={(e) => e.preventDefault()} className='form-container'>
        <input
          type='text'
          placeholder='Enter a Todo'
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button onClick={deneme}>Add To-Do</button>
      </form>

      <div className='todolist-container'>
        {todo.map((item) => (
          <div className='todos' id={item.id} name={item.name} key={item.id}>
            <p
              id={item.id}
              name={todo.name}
              className={item.completed === true ? "completed" : " "}
              onClick={() =>
                setTodo(
                  todo.map((el) =>
                    el.id === item.id ? { ...el, completed: !el.completed } : el
                  )
                )
              }
            >
              {item.name}
            </p>
            <div className='button-container'>
              <button id={item.id} onClick={() => removeTodo(item.id)}>
                Sil
              </button>
              <button
                id={item.id}
                onClick={() =>
                  setTodo(
                    todo.map((el) =>
                      el.id === item.id
                        ? { ...el, name: prompt("Please enter a new To-do") }
                        : el
                    )
                  )
                }
              >
                Düzenle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
