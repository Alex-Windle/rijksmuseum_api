import React from 'react'; 

const Results = function(props) {
	console.log(props.artworks);

	const artworkList = props.artworks.map(function(artwork) {
		return (
			<li>
				<div className="img-wrapper"><img src={artwork.webImage.url} alt="No image available." /></div>
				<em>{artwork.title}</em><br/>
				{artwork.principalOrFirstMaker}
			</li>
		);
	})

	console.log(props);
	return (
		<div>
			<em>Results</em>
			<ul className="artwork-list">{artworkList}</ul>
		</div>);
}

export default Results;