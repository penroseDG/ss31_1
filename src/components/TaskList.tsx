import React from 'react';
import TaskItem from './TaskItem';

interface Task {
  name: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  deleteTask: (taskName: string) => void;
  toggleTaskCompletion: (taskName: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.name}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;
