import { TOP_ARTWORKS } from '../actions/index'; 

const initialState = []; 

export default (state = initialState, action) => {
	const payload = action.payload; 

	switch(action.type) {
		case TOP_ARTWORKS:
			return [
				...state,
				...payload,
			];
		default: 
			return state; 
	}
}