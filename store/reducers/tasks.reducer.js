import { tasksTypes } from "../types/tasks.types";
import { insertTask, getTasks, deleteAll, deleteTask, deleteTasks } from "../../db/index";
import { addTask } from "../actions";
const { SET_TASK, SET_TASKS, SET_IMAGE, ADD_TASK, DELETE_TASK, ADD_TASK_TO_SELECTED_TASKS, DELETE_ALL_SELECTED_TASKS, DELETE_ALL } = tasksTypes;

const initialState = {
  task: '',
  image: null,
  tasks: [],
  selectedTasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        task: action.task,
      };
    case SET_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };
    case SET_IMAGE:
      return {
        ...state,
        image: action.image,
      };
    case ADD_TASK:
      if(state.task.length > 0 && state.image !== null) {
        return {
          ...state,
          tasks: [...state.tasks, action.task],
          task: '',
          image: null,
        };
      }
      return state;
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.id),
        selectedTasks: state.selectedTasks.filter((item) => item.id !== action.id),
      };
    case ADD_TASK_TO_SELECTED_TASKS:
      if (state.selectedTasks.includes(action.item)) {
        return {
          ...state,
          selectedTasks: state.selectedTasks.filter((selected) => selected.id !== action.item.id),
        };
      } else {
        return {
          ...state,
          selectedTasks: [...state.selectedTasks, action.item],
        };
      }
    case DELETE_ALL_SELECTED_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter((item) => !state.selectedTasks.includes(item)),
        selectedTasks: [],
      };
    case DELETE_ALL:
      return {
        ...state,
        tasks: [],
        selectedTasks: [],
      };
    default:
      return state;
  }
};

export const loadTasks = () => {
  return async (dispatch) => {
    try {
      let tasks = await getTasks();
      console.log(tasks.rows._array);
      tasks = tasks.rows._array
      dispatch({
        type: SET_TASKS,
        tasks,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const saveTask = (task, image) => {
  return async (dispatch) => {
    try {
      const id = await insertTask(task, image);
      task = {id: id.insertId, title: task, image: image}
      dispatch({
        type: ADD_TASK,
        task,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const removeTask = (id) => {
  return async (dispatch) => {
    try {
      await deleteTask(id);
      dispatch({
        type: DELETE_TASK,
        id,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export const removeAllTasks = () => {
  return async (dispatch) => {
    try {
      await deleteAll();
      dispatch({
        type: DELETE_ALL,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export const removeSelectedTasks = (selectedTasks) => {
  return async (dispatch) => {
    try {
      await deleteTasks(selectedTasks);
      dispatch({
        type: DELETE_ALL_SELECTED_TASKS,
      });
    } catch (error) {
      console.log(error);
    }
  }
}