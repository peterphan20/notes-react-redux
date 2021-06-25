import { SELECT_NOTE } from "../constants/actionTypes";

export const focusReducer = (focused = {}, action) => {
	switch (action.type) {
		case SELECT_NOTE:
			return { ...focused, selectNote: action.payload.id };
		default:
			return focused;
	}
};
