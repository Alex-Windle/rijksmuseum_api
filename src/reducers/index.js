// Module imports
import { combineReducers } from 'redux';

// Reducer imports
import TopArtworksReducer from './TopArtworks_reducer.js'; 

const rootReducer = combineReducers({
	topArtworks: TopArtworksReducer,
});

export default rootReducer;
