import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <ul>
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
