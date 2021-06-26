import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { getNotesFromLocalStorage } from "./actions";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (!localStorage.getItem("notes")) {
			// instantiate an empty object for people visit app for first time
			const note = JSON.stringify({});

			// local storage can only hold strings
			localStorage.setItem("notes", note);

			// call getNotesFromLocalStorage which pulls from localstorage to sync with redux store
			dispatch(getNotesFromLocalStorage());
		} else {
			dispatch(getNotesFromLocalStorage());
		}
	}, [dispatch]);

	return (
		<div className="flex overflow-hidden w-full h-full">
			<Sidebar />
			<Main />
		</div>
	);
};

export default App;
