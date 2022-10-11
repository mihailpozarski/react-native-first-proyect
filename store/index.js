import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { tasksReducer } from "./reducers";

const rootReducer = combineReducers({
  tasksState: tasksReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));