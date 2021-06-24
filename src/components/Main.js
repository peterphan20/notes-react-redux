import React, { useState } from "react";

const Main = () => {
	const [text, setText] = useState("");

	return (
		<div className="h-screen w-full">
			<div className="flex flex-col bg-gray-100 p-7">
				<div className="pb-5">
					<input
						type="text"
						autoFocus
						placeholder="Title"
						className="text-xl border-solid border border-gray-300 w-full outline-none py-2 px-1 focus:ring-2 focus:ring-blue-500"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<textarea
					placeholder="Write your notes here"
					className="text-l border-solid border border-gray-300 p-1 h-96 w-full outline-none resize-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<div className="bg-gray-200 border-t border-solid border-gray-300 p-7 min-h-full">
				<h1 className="text-2xl font-semibold">Title</h1>
				<div className="text-md">Notes preview</div>
			</div>
		</div>
	);
};

export default Main;
