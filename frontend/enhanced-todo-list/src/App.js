import React, { useState } from 'react';
import TaskList from './components/TaskList';
import './App.css';  // Add styles for dark mode

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
      <TaskList />
    </div>
  );
}

export default App;

