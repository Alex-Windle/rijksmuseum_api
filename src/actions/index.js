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
export const DETAIL_VIEW = 'DETAIL_VIEW'; 
export const KEYWORD = 'KEYWORD'; 

export const getTopArtworks = () => {
	const request = fetch("https://www.rijksmuseum.nl/api/en/collection/?key=cbUNdwH5&ps=20&imgonly=True&toppieces=True")
		.then(resp => resp.json())
		.then(resp => resp.artObjects) // returns a promise

	return {
		type: TOP_ARTWORKS,
		payload: request,  // Redux Promise PAUSES to allow data call
	};
}

// export const getDetailView = (id) => {
// 	id = id.split('').splice(3).join('');
// 	console.log('parameter: ', id);
// 	const request = fetch(`https://www.rijksmuseum.nl/api/en/collection/${id}?key=cbUNdwH5`)
// 		.then(resp => resp.json())
// 		.then(resp => {console.log('response: ', resp)}) // returns a promise

// 	return {
// 		type: DETAIL_VIEW,
// 		payload: request,  // Redux Promise PAUSES to allow data call
// 	};
// }

export const searchByKeyword = (keyword) => {
	console.log('keyword received by action creator: ', keyword);
	const request = fetch(`https://www.rijksmuseum.nl/api/en/collection/?key=cbUNdwH5&p=0&ps=5&imgonly=True&q=${keyword}`) 
		.then(resp => resp.json())
		.then(resp => resp.artObjects) // returns a promise
	
	return {
		type: KEYWORD,
		payload: request, // Redux Promise PAUSES to allow data call
	};
}
