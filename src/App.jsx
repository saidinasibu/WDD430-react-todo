import { useState } from "react";

function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    if (newTodo === "") return;

    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function deleteTodo(index) {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>

      <h1>My Todo List</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;