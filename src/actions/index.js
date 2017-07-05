export const TOP_ARTWORKS = 'TOP_ARTWORKS'; 

export const getTopArtworks = (list) => {
	return {
		type: TOP_ARTWORKS,
		payload: [...list],
	};
}
