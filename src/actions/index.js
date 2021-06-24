import { READ, CREATE } from "../constants/actionTypes";

export const getNotes = () => {
	const notesCollection = JSON.parse(localStorage.getItem("notes"));

	const action = { type: READ, payload: notesCollection };
	return action;
};

export const addNote = (note) => {
	// pull preexisting data from local storage
	const notesCollection = JSON.parse(localStorage.getItem("notes"));
	// add note to notesCollection
	const id = note.id;
	notesCollection[id] = note;
	// converting note data to string and pushing it back into local storage
	localStorage.setItem("notes", JSON.stringify(notesCollection));

	const action = { type: CREATE, payload: note };
	return action;
};

export const updateNote = (id, note) => {};
