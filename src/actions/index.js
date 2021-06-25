import { READ, CREATE, DELETE, UPDATE } from "../constants/actionTypes";

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

export const updateNote = (note) => {
	const notesCollection = JSON.parse(localStorage.getItem("notes"));

	const id = note.id;
	notesCollection[id] = note;

	localStorage.setItem("notes", JSON.stringify(notesCollection));

	const action = { type: UPDATE, payload: note };
	return action;
};

export const deleteNote = (id) => {
	const notesCollection = JSON.parse(localStorage.getItem("notes"));

	delete notesCollection[id];

	localStorage.setItem("notes", JSON.stringify(notesCollection));

	const action = { type: DELETE, payload: id };
	return action;
};
