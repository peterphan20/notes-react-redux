import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteNote } from "../actions";

const Note = () => {
	const notes = useSelector((state) => state.notesReducer);
	const dispatch = useDispatch();

	const renderedList = Object.values(notes).map((note) => {
		return (
			<div className="hover:bg-gray-300 w-full h-full p-4" key={note.id}>
				<div className="flex justify-between items-center">
					<strong>{note.title}</strong>
					<button
						className="text-l text-red-600 outline-none"
						onClick={() => dispatch(deleteNote(note.id))}
					>
						Delete
					</button>
				</div>
				<p className="text-md">{note.body}</p>
				<p className="text-xs">
					Last Modified:{" "}
					{new Date(note.dateModified).toLocaleDateString("en-US", {
						hour: "2-digit",
						minute: "2-digit",
					})}
				</p>
			</div>
		);
	});

	return <div>{renderedList}</div>;
};

export default Note;
