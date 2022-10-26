import { tasksTypes } from "../types/tasks.types";
const { SET_TASK, SET_TASKS, SET_IMAGE, ADD_TASK, DELETE_TASK, ADD_TASK_TO_SELECTED_TASKS, DELETE_ALL_SELECTED_TASKS, DELETE_ALL } = tasksTypes;

export const setTask = (task) => ({
  type: SET_TASK,
  task,
});

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  tasks,
});

export const setImage = (image) => ({
  type: SET_IMAGE,
  image,
});

export const addTask = (id, task, image) => {
  return ({
    type: ADD_TASK,
  })
};

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id,
});

export const addTaskToSelectedTasks = (item) => ({
  type: ADD_TASK_TO_SELECTED_TASKS,
  item,
});

export const deleteAllSelectedTasks = () => ({
  type: DELETE_ALL_SELECTED_TASKS,
});

export const deleteAll = () => ({
  type: DELETE_ALL,
});