import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Note from "./Note";

import { addNote } from "../actions";

const Sidebar = ({ currentId, setCurrentId }) => {
	const dispatch = useDispatch();

	const onAddSubmit = () => {
		const noteBody = {
			id: uuidv4(),
			title: "Untitled Note",
			body: "",
			lastModified: Date.now(),
		};
		dispatch(addNote(noteBody));
	};

	return (
		<div className="bg-gray-100 border-solid border-r border-gray-300 h-screen w-1/3">
			<div className="flex justify-between items-center py-5 px-4">
				<h1 className="text-3xl font-bold">Notes</h1>
				<button className="text-blue-600 text-l" onClick={() => onAddSubmit()}>
					Add
				</button>
			</div>
			<div>
				<Note setCurrentId={setCurrentId} />
			</div>
		</div>
	);
};

export default Sidebar;
