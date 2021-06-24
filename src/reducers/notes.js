import { READ, CREATE } from "../constants/actionTypes";

export const notesReducer = (notes = {}, action) => {
	switch (action.type) {
		case READ:
			return action.payload;
		case CREATE:
			const id = action.payload.id;
			notes[id] = action.payload;
			return notes;
		default:
			return notes;
	}
};
