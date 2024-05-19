import React from 'react';

interface Task {
  name: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  deleteTask: (taskName: string) => void;
  toggleTaskCompletion: (taskName: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.name)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={() => deleteTask(task.name)}>Xóa</button>
    </li>
  );
};

export default TaskItem;
