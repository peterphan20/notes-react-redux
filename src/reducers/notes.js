import { READ, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export const notesReducer = (notes = {}, action) => {
	const newState = JSON.parse(JSON.stringify(notes));
	switch (action.type) {
		case READ:
			return { ...newState, ...action.payload };
		case CREATE:
			newState[action.payload.id] = action.payload;
			return newState;
		case UPDATE:
			newState[action.payload.id] = action.payload;
			return newState;
		case DELETE:
			delete newState[action.payload.id];
			return newState;
		default:
			return newState;
	}
};

// {
//   notesReducer: {
//     '70983c0f-8588-4bb3-8da1-36df26ce12e8': {
//       id: '70983c0f-8588-4bb3-8da1-36df26ce12e8',
//       title: 'Untitled note',
//       body: '',
//       lastModified: 1624652450748
//     },
//     'ce557b61-4a47-4401-a767-16982fd79910': {
//       id: 'ce557b61-4a47-4401-a767-16982fd79910',
//       title: 'Untitled note',
//       body: '',
//       lastModified: 1624652453299
//     },
//   },
//   focusReducer: {}
// }
