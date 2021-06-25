import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, selectNote } from "../actions";

const Note = () => {
	const notes = useSelector((state) => state.notesReducer);
	const dispatch = useDispatch();

	const notesValue = Object.values(notes);
	const renderedList = notesValue.map((value) => {
		return (
			<div
				className="hover:bg-gray-300 w-full h-full p-4"
				key={value.id}
				onClick={() => dispatch(selectNote(value.id))}
			>
				<div className="flex justify-between items-center">
					<strong>{value.title}</strong>
					<button
						className="text-l text-red-600 outline-none"
						onClick={() => dispatch(deleteNote(value.id))}
					>
						Delete
					</button>
				</div>
				<p className="text-md truncate">{value.body}</p>
				<p className="text-xs">
					Last Modified:{" "}
					{new Date(value.lastModified).toLocaleDateString("en-US", {
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
