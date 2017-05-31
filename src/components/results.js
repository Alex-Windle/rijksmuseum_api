import React from 'react'; 

const Results = function(props) {
	console.log(props.artworks);
	
	const artworkList = props.artworks.map(function(artwork) {
		return (<li>{artwork.title}</li>);
	})

	return (
		<div>
			Results
			<ul>{artworkList}</ul>
		</div>);
}

export default Results;