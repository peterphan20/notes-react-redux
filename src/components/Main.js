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
		setTitle(currSelectedNote?.title || "");
		setBody(currSelectedNote?.body || "");
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
		<div className="flex flex-col h-screen w-full">
			<div className=" bg-gray-100 p-7">
				<div className="pb-5">
					<input
						type="text"
						autoFocus
						placeholder="Title"
						className="flex-grow-0 flex-shrink-0 text-xl border-solid border border-gray-300 w-full outline-none py-2 px-5 focus:ring-2 focus:ring-blue-500"
						value={title}
						onChange={(e) => handleTitleUpdate(e.target.value)}
						disabled={!noteId}
					/>
				</div>
				<textarea
					placeholder="Write your notes here"
					className="flex-grow-0 flex-shrink-0 border-solid border border-gray-300 py-3 px-5 w-full max-w-9xl h-96 outline-none resize-none focus:ring-2 focus:ring-blue-500"
					value={body}
					onChange={(e) => handleBodyUpdate(e.target.value)}
					disabled={!noteId}
				/>
			</div>
			<div className="flex-grow-0 flex-shrink-0 bg-gray-200 border-t border-solid border-gray-300 p-7 max-w-9xl min-h-full overflow-clip overflow-hidden overflow-y-auto">
				<h1 className="text-2xl font-semibold pb-7">
					{!title || title === "Untitled note" ? "Notes preview" : title}
				</h1>
				<ReactMarkdown className=" text-md h-80">{body}</ReactMarkdown>
			</div>
		</div>
	);
};

export default Main;
