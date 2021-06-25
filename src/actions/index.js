import { SELECT_NOTE, READ, CREATE, DELETE, UPDATE } from "../constants/actionTypes";

export const selectedNote = (id) => {
	const action = { type: SELECT_NOTE, payload: id };
	return action;
};

export const getNotes = () => {
	const notesCollection = JSON.parse(localStorage.getItem("notes"));

	const action = { type: READ, payload: notesCollection };
	return action;
};

export const addNote = (data) => {
	// // pull preexisting data from local storage
	// const notesCollection = JSON.parse(localStorage.getItem("notes"));

	// // add note to notesCollection
	// const id = note.id;
	// notesCollection[id] = note;

	// // converting note data to string and pushing it back into local storage
	// localStorage.setItem("notes", JSON.stringify(notesCollection));

	const action = { type: CREATE, payload: data };
	return action;
};

export const updateNote = (data) => {
	// const notesCollection = JSON.parse(localStorage.getItem("notes"));

	// const id = note.id;
	// notesCollection[id] = note;

	// localStorage.setItem("notes", JSON.stringify(notesCollection));

	const action = { type: UPDATE, payload: data };
	return action;
};

export const deleteNote = (noteId) => {
	// const notesCollection = JSON.parse(localStorage.getItem("notes"));

	// delete notesCollection[id];

	// localStorage.setItem("notes", JSON.stringify(notesCollection));

	const action = { type: DELETE, payload: noteId };
	return action;
};
