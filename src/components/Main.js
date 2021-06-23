import React from "react";

const Main = () => {
	return (
		<div className="bg-gray-100 h-screen w-full">
			<div className="flex flex-col p-7">
				<div className="pb-5">
					<input
						type="text"
						autoFocus
						className="text-xl border-solid border border-gray-300 w-full outline-none py-2 px-1 focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<textarea
					placeholder="Write your notes here"
					className="text-l border-solid border border-gray-300 p-1 h-96 w-full outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<div className="border-t border-solid border-gray-300 p-7">
				<h1 className="text-2xl font-semibold">Title</h1>
				<div className="text-md">Notes preview</div>
			</div>
		</div>
	);
};

export default Main;
