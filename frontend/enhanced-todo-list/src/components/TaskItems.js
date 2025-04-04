import React from "react";

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li>
      <span 
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
        onClick={() => onToggle(task.id, !task.completed)}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
