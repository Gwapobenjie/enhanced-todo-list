import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import './App.css';  

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://backendnew-test.onrender.com/api/tasks/")  // Fetch from Render backend
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;


