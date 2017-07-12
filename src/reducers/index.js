// Module imports
import { combineReducers } from 'redux';

// Reducer imports
import TopArtworksReducer from './TopArtworks_reducer.js'; 
import SearchedArtworksReducer from './SearchedArtworks_reducer.js'; 

const rootReducer = combineReducers({
	topArtworks: TopArtworksReducer,
	searchedArtworks: SearchedArtworksReducer,
});

export default rootReducer;
