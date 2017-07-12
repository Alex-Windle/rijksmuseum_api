// A reducer is a function that takes in state and an action. 
// It returns a copy of state. 
import { KEYWORD } from '../actions/index';

const initialState =  [];

export default (state = initialState, action) => {
	const payload = action.payload; 

	switch(action.type) {
		case KEYWORD:
			console.log('reducer receives payload: ', payload);
			return [
				...state,
				...payload,
			];
		default: 
			return state; 
	};
}