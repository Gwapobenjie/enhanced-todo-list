import React from 'react';
import TaskItem from './TaskItem'; // You may need to create this if it doesn't exist

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
        ))
      )}
    </ul>
  );
};

export default TaskList;
