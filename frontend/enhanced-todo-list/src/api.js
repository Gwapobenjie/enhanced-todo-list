import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import { fetchTasks, addTask, deleteTask, toggleTask } from "./api"; // Import API functions
import "./App.css"; 

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const data = await fetchTasks();
      setTasks(data);
    }
    loadTasks();
  }, []);

  const handleAddTask = async (taskText) => {
    const newTask = await addTask({ text: taskText, completed: false });
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleTask = async (id, completed) => {
    const updatedTask = await toggleTask(id, completed);
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  return (
    <div>
      <button onClick={() => handleAddTask(prompt("Enter task:"))}>
        Add Task
      </button>
      <TaskList tasks={tasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
