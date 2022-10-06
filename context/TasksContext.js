import React, {createContext, useState}  from 'react';

export const TasksContext = createContext([]);

export const TasksContextProvider = ({children}) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const addTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), value: task },
    ]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
    setSelectedTasks(selectedTasks.filter((item) => item.id !== id));
  };

  const addTaskToSelectedTasks = (item) => {
    if (selectedTasks.includes(item)) {
      setSelectedTasks(selectedTasks.filter((selected) => selected.id !== item.id));
    } else {
      setSelectedTasks([...selectedTasks, item]);
    }
  };

  const deleteAllSelectedTasks = () => {
    setTasks(tasks.filter((item) => !selectedTasks.includes(item)));
    setSelectedTasks([]);
  };

  const deleteAll = () => {
    setTasks([]);
    setSelectedTasks([]);
  };

  return (
    <TasksContext.Provider
      value={{
        task,
        tasks,
        selectedTasks,
        setTask,
        setTasks,
        setSelectedTasks,
        addTask,
        deleteTask,
        addTaskToSelectedTasks,
        deleteAllSelectedTasks,
        deleteAll,
      }}>
      {children}
    </TasksContext.Provider>
  );
}
