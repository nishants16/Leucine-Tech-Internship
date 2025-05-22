import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:4000/todos");
    setTodos(res.data);
  };

  useEffect(() => { fetchTodos(); }, []);

  const addTodo = async () => {
    if (text.trim() === "") return;
    await axios.post("http://localhost:4000/todos", { text });
    setText("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:4000/todos/${id}`);
    fetchTodos();
  };

  const summarize = async () => {
    try {
      const res = await axios.post("http://localhost:4000/summarize");
      setMessage("Summary sent to Slack successfully!");
    } catch (err) {
      setMessage("Failed to send summary to Slack.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h1>Todo Summary Assistant</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter task..." />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text} <button onClick={() => deleteTodo(todo.id)}>Delete</button></li>
        ))}
      </ul>
      <button onClick={summarize}>Summarize & Send to Slack</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
