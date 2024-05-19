import React, { useState } from 'react';

interface TaskFormProps {
  addTask: (taskName: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [taskName, setTaskName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Nhập tên công việc"
      />
      <button type="submit">Thêm</button>
    </form>
  );
};

export default TaskForm;
