import { READ, CREATE, DELETE } from "../constants/actionTypes";

export const notesReducer = (notes = {}, action) => {
	switch (action.type) {
		case READ:
			return action.payload;
		case CREATE:
			const id = action.payload.id;
			notes[id] = action.payload;
			return notes;
		case DELETE:
			const index = action.payload.id;
			return Object.values(notes).filter((note) => note.id !== index);
		default:
			return notes;
	}
};
