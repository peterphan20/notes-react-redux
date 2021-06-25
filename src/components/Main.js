import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import { updateNote } from "../actions";

const Main = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [noteId, setNoteId] = useState("");

	const notes = useSelector((state) => state.notesReducer);
	const focus = useSelector((state) => state.focusReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		const id = focus.selectNote;
		setNoteId(id);
	}, [focus]);

	useEffect(() => {
		const currSelectedNote = notes[noteId];
		setTitle(currSelectedNote?.title);
		setBody(currSelectedNote?.body);
	}, [noteId, notes]);

	const handleTitleUpdate = (value) => {
		const note = {
			id: noteId,
			title: value,
			body,
			lastModified: Date.now(),
		};
		dispatch(updateNote(note));
	};
	const handleBodyUpdate = (value) => {
		const note = {
			id: noteId,
			title,
			body: value,
			lastModified: Date.now(),
		};
		dispatch(updateNote(note));
	};

	return (
		<div className="h-screen w-full">
			<div className="flex flex-col bg-gray-100 p-7">
				<div className="pb-5">
					<input
						type="text"
						autoFocus
						placeholder="Title"
						className="text-xl border-solid border border-gray-300 w-full outline-none py-2 px-1 focus:ring-2 focus:ring-blue-500"
						value={title}
						onChange={(e) => handleTitleUpdate(e.target.value)}
						disabled={!noteId}
					/>
				</div>
				<textarea
					placeholder="Write your notes here"
					className="text-l border-solid border border-gray-300 p-1 h-96 w-full outline-none resize-none focus:ring-2 focus:ring-blue-500"
					value={body}
					onChange={(e) => handleBodyUpdate(e.target.value)}
					disabled={!noteId}
				/>
			</div>
			<div className="bg-gray-200 border-t border-solid border-gray-300 p-7 min-h-full">
				<h1 className="text-2xl font-semibold pb-7">{notes.title}</h1>
				<ReactMarkdown className="text-md h-80 overflow-auto">{notes.body}</ReactMarkdown>
			</div>
		</div>
	);
};

export default Main;
