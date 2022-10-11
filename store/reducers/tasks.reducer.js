import { tasksTypes } from "../types/tasks.types";
const { SET_TASK, ADD_TASK, DELETE_TASK, ADD_TASK_TO_SELECTED_TASKS, DELETE_ALL_SELECTED_TASKS, DELETE_ALL } = tasksTypes;

const initialState = {
  task: '',
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
    case ADD_TASK:
      if(state.task.length > 0) {
        return {
          ...state,
          tasks: [...state.tasks, { id: Date.now(), value: state.task }],
          task: '',
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
