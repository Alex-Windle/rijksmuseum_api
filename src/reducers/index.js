import { combineReducers } from 'redux';

import Top100Reducer from './reducer_top_100.js'; 

// Each key set in the rootReducer sets the 
// key in the global state.

const rootReducer = combineReducers({
  top100: Top100Reducer
});

export default rootReducer;