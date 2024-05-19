import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';
import './styles.css';
import TaskItem from './components/TaskItem';

interface Task {
  name: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as Task[];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName: string) => {
    if (taskName && !tasks.some(task => task.name === taskName)) {
      setTasks([...tasks, { name: taskName, completed: false }]);
    } else {
      alert('Tên công việc không được để trống hoặc trùng lặp');
    }
  };

  const deleteTask = () => {
    if (taskToDelete) {
      setTasks(tasks.filter(task => task.name !== taskToDelete));
      setShowModal(false);
    }
  };

  const toggleTaskCompletion = (taskName: string) => {
    setTasks(tasks.map(task =>
      task.name === taskName ? { ...task, completed: !task.completed } : task
    ));
  };

  const openDeleteModal = (taskName: string) => {
    setTaskToDelete(taskName);
    setShowModal(true);
  };

  const closeDeleteModal = () => {
    setShowModal(false);
  };

  return (
    <><div className="app">
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={openDeleteModal}
        toggleTaskCompletion={toggleTaskCompletion} />
      {showModal && (
        <Modal
          taskToDelete={taskToDelete}
          deleteTask={deleteTask}
          closeDeleteModal={closeDeleteModal} />
      )}
      {tasks.length > 0 && tasks.every(task => task.completed) && (
        <div className="completion-message">Hoàn thành công việc</div>
      )}

    </div><Modal></Modal><TaskList></TaskList><TaskForm></TaskForm><TaskItem></TaskItem></>
    
  );
};

export default App;
