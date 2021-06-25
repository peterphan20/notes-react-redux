import { createStore } from "redux";
import reducers from "../reducers";

// create our store from our notesReducer and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = createStore(
	reducers,
	{},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
