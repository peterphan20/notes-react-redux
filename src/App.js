import React from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
	return (
		<div className="flex">
			<Sidebar />
			<Main />
		</div>
	);
};

export default App;
