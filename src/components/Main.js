import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";

import { updateNote } from "../actions";

const Main = ({ currentId }) => {
	const [noteData, setNoteData] = useState({
		title: "",
		body: "",
		lastModified: Date.now(),
	});
	const dispatch = useDispatch();

	const onEditField = (key, value) => {
		setNoteData({
			...noteData,
			[key]: value,
			lastModified: Date.now(),
		});
		dispatch(updateNote(noteData));
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
						value={noteData.title}
						onChange={(e) => onEditField("title", e.target.value)}
					/>
				</div>
				<textarea
					placeholder="Write your notes here"
					className="text-l border-solid border border-gray-300 p-1 h-96 w-full outline-none resize-none focus:ring-2 focus:ring-blue-500"
					value={noteData.body}
					onChange={(e) => onEditField("body", e.target.value)}
				/>
			</div>
			<div className="bg-gray-200 border-t border-solid border-gray-300 p-7 min-h-full">
				<h1 className="text-2xl font-semibold pb-7">{noteData.title}</h1>
				<ReactMarkdown className="text-md h-80 overflow-auto">{noteData.body}</ReactMarkdown>
			</div>
		</div>
	);
};

export default Main;
