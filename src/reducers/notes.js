import { SELECT_NOTE, READ, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export const notesReducer = (notes = {}, action) => {
	const newState = Object.assign({}, notes);
	switch (action.type) {
		case READ:
			return action.payload;
		case SELECT_NOTE:
			return action.payload;
		case CREATE:
			const id = action.payload.id;
			newState[id] = action.payload;
			return newState;
		case UPDATE:
			return Object.values(notes).filter((note) =>
				note.id === action.payload.id ? action.payload : notes
			);
		case DELETE:
			return Object.values(newState).filter((note) => note.id !== action.payload);
		default:
			return notes;
	}
};
