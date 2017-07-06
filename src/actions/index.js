// This action creator incorporates middleware. 
// Middleware are functions that take in actions 
// and modify them before going into the reducers, 
// which update state. 

// Asynchronous middleware (like redux-promise, used here)
// wraps the store's 'dispatch()' method and allows you to 
// dispatch something other than actions (like functions or
// promises). The middleware interprets whatever you dispatch.
// A promise middleware, for example, can intercept promises.

// The final middleware in the chain MUST dispatch a plain object,
// and this last step is when the synchronous Redux data flow
// commences.

export const TOP_ARTWORKS = 'TOP_ARTWORKS'; 

export const getTopArtworks = (list) => {
	
	return {
		type: TOP_ARTWORKS,
		payload: [...list],
	};
}
