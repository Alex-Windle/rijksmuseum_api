import React from 'react'; 

const Results = function(props) {
	const artworkList = props.artworks.map(function(artwork) {
		return (
			<li key={artwork.id}>
				<div className="img-wrapper"><img src={artwork.webImage.url} alt="No image available." /></div>
				<em>{artwork.title}</em><br/>
				{artwork.principalOrFirstMaker}
			</li>
		);
	})

	return (
		<div>
			<em>Results</em>
			<ul className="artwork-list">{artworkList}</ul>
		</div>);
}

export default Results;