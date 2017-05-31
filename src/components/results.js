import React from 'react'; 

const Results = function(props) {
	console.log(props.artworks);

	const artworkList = props.artworks.map(function(artwork) {
		if(artwork.webImage) {
			return (
				<li>
					<strong>Title:</strong><em> {artwork.title}</em><br/>
					<strong>Artist:</strong> {artwork.principalOrFirstMaker}<br/><br/>
					<div className="img-wrapper">
						<img src={artwork.webImage.url} alt="No image available." />
					</div>
				</li>
			);
		} else {
			return (
				<li>
					<strong>Title:</strong><em> {artwork.title}</em><br/>
					<strong>Artist:</strong> {artwork.principalOrFirstMaker}<br/><br/>
					<div className="img-wrapper">
						<img src={null} alt="No image available." />
					</div>
				</li>
			); 
		}
	})

	return (
		<div>
			Results
			<ul>{artworkList}</ul>
		</div>);
}

export default Results;