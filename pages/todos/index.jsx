import { useState, useEffect } from "react";
import axios from "axios";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const response = await axios.get("/api/todos");
      const data = response.data;
      setTodos(data);
    }

    fetchTodos();
  }, []);

  return (
    <>
      <div>
        <h1>Todos</h1>
        <ul>
          {todos.map((todo) => (
            <li role="listitem" key={todo.id}>
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todos;
