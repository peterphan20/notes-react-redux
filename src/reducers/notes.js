import { READ, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export const notesReducer = (notes = {}, action) => {
	switch (action.type) {
		case READ:
			return action.payload;
		case CREATE:
			const id = action.payload.id;
			notes[id] = action.payload;
			return notes;
		case UPDATE:
			return notes;
		case DELETE:
			return Object.values(notes).filter((note) => note.id !== action.payload);
		default:
			return notes;
	}
};
