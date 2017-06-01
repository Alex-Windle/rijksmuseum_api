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

	return (
		<div>
			{ props.artworks.length > 0 ? <em>Results</em> : ' '}
			<ul className="artwork-list">{artworkList}</ul>
		</div>);
}

export default Results;