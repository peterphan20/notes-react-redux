import React from "react";

const Note = () => {
	return (
		<div className="hover:bg-gray-300 w-full h-full p-4">
			<div className="flex justify-between items-center">
				<strong>TITLE</strong>
				<button className="text-l text-red-600 outline-none">Delete</button>
			</div>
			<p className="text-md">Note preview</p>
			<small>Last modified [date]</small>
		</div>
	);
};

export default Note;
