import React, { useState, useEffect } from "react";
import "./App.css"; // Import CSS for styling

function App() {
  // State to store tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    const newTaskObj = { id: Date.now(), text: newTask, completed: false, editing: false };
    setTasks([...tasks, newTaskObj]);
    setNewTask(""); // Clear input
  };

  // Toggle completion status
  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // Enable edit mode
  const enableEditMode = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, editing: true } : task));
  };

  // Save edited task
  const saveTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText, editing: false } : task));
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <header>
        <h1>Enhanced To-Do List by Benjie gwapo</h1>
        <button onClick={() => setDarkMode(!darkMode)}>🌙 Toggle Dark Mode</button>
      </header>

      {/* Input Field */}
      <div className="task-input">
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Enter a new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* Filter Buttons */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            {task.editing ? (
              <input 
                type="text" 
                defaultValue={task.text} 
                onBlur={(e) => saveTask(task.id, e.target.value)}
              />
            ) : (
              <>
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  onChange={() => toggleCompletion(task.id)} 
                />
                <span>{task.text}</span>
                <button onClick={() => enableEditMode(task.id)}>✏️ Edit</button>
                <button onClick={() => deleteTask(task.id)}>❌ Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
