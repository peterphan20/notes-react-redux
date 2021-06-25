import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Note from "./Note";
import { addNote } from "../actions";

const Sidebar = () => {
	const dispatch = useDispatch();

	const onAddSubmit = () => {
		const newNote = {
			id: uuidv4(),
			title: "Untitled note",
			body: "",
			lastModified: Date.now(),
		};
		dispatch(addNote(newNote));
	};

	return (
		<div className="bg-gray-100 border-solid border-r border-gray-300 h-screen max-w-7xl">
			<div className="flex justify-between items-center py-5 px-4">
				<h1 className="text-3xl font-bold">Notes</h1>
				<button className="text-blue-600 text-l" onClick={() => onAddSubmit()}>
					Add
				</button>
			</div>
			<div>
				<Note />
			</div>
		</div>
	);
};

export default Sidebar;
