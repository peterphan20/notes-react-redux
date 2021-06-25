import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import { updateNote } from "../actions";

const Main = () => {
	const notes = useSelector((state) => state.notesReducer);
	const dispatch = useDispatch();

	return (
		<div className="h-screen w-full">
			<div className="flex flex-col bg-gray-100 p-7">
				<div className="pb-5">
					<input
						type="text"
						autoFocus
						placeholder="Title"
						className="text-xl border-solid border border-gray-300 w-full outline-none py-2 px-1 focus:ring-2 focus:ring-blue-500"
						value={notes.title}
						onChange={(e) => dispatch(updateNote("title", e.target.value))}
					/>
				</div>
				<textarea
					placeholder="Write your notes here"
					className="text-l border-solid border border-gray-300 p-1 h-96 w-full outline-none resize-none focus:ring-2 focus:ring-blue-500"
					value={notes.body}
					onChange={(e) => dispatch(updateNote("title", e.target.value))}
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
