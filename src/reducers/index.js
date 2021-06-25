import { combineReducers } from "redux";
import { notesReducer } from "./notes";
import { focusReducer } from "./focus";

const reducers = combineReducers({ notesReducer, focusReducer });

export default reducers;
