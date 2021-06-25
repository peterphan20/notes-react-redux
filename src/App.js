import React from "react";
// import { useDispatch } from "react-redux";

import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
// import { getNotes } from "./actions";

const App = () => {
	// const dispatch = useDispatch();
	// const state = useSelector((state) => state.notesReducer);

	// useEffect(() => {
	// 	// if (!localStorage.getItem("notes")) {
	// 	// 	// instantiate an empty object for people visit app for first time
	// 	// 	const note = JSON.stringify({});
	// 	// 	// local storage can only hold strings
	// 	// 	localStorage.setItem("notes", note);
	// 	// 	// call getNotes which pulls from localstorage to sync with redux store
	// 	// 	dispatch(getNotes());
	// 	// } else {
	// 	// 	dispatch(getNotes());
	// 	// }
	// 	dispatch(getNotes());
	// }, [dispatch]);

	return (
		<div className="flex overflow-hidden">
			{/* {Object.keys(state).length === 0 ? (
				<button>Create new note</button>
			) : } */}
			<Sidebar />
			<Main />
		</div>
	);
};

export default App;
