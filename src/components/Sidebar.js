import React from "react";
import Note from "./Note";

const Sidebar = () => {
	return (
		<div className="font-body bg-gray-100 border-solid border-r border-gray-300 h-screen w-1/3">
			<div className="flex justify-between items-center py-5 px-4">
				<h1 className="text-3xl font-bold">Notes</h1>
				<button className="text-blue-600 text-l">Add</button>
			</div>
			<div>
				<Note />
			</div>
		</div>
	);
};

export default Sidebar;
