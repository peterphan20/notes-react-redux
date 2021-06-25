import { SELECT_NOTE, READ, CREATE, DELETE, UPDATE } from "../constants/actionTypes";

export const selectNote = (id) => {
	const action = { type: SELECT_NOTE, payload: { id } };
	return action;
};

export const getNotesFromLocalStorage = () => {
	const notesCollection = JSON.parse(localStorage.getItem("notes"));

	const action = { type: READ, payload: notesCollection };
	return action;
};

export const addNote = (data) => {
	const notesCollection = JSON.parse(localStorage.getItem("notes"));
	notesCollection[data.id] = data;
	localStorage.setItem("notes", JSON.stringify(notesCollection));

	const action = { type: CREATE, payload: data };
	return action;
};

export const updateNote = (data) => {
	const notesCollection = JSON.parse(localStorage.getItem("notes"));
	notesCollection[data.id] = data;
	localStorage.setItem("notes", JSON.stringify(notesCollection));

	const action = { type: UPDATE, payload: data };
	return action;
};

export const deleteNote = (id) => {
	const notesCollection = JSON.parse(localStorage.getItem("notes"));
	delete notesCollection[id];
	localStorage.setItem("notes", JSON.stringify(notesCollection));

	const action = { type: DELETE, payload: { id } };
	return action;
};
