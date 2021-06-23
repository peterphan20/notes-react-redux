import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "react-redux";

import App from "./App";
import "./index.css";

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	document.getElementById("root")
);
