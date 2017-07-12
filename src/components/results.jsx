import React from 'react'; 

const Results = function(props) {
	// const artworkList = props.artworks.map(function(artwork) {
	// 	if (artwork.webImage) {
	// 		return (
	// 			<li key={artwork.id}>
	// 				<div className="img-wrapper"><img src={artwork.webImage.url} alt="No image available." /></div>
	// 				<em>{artwork.title}</em><br/>
	// 				{artwork.principalOrFirstMaker}
	// 			</li>
	// 		);
	// 	} else {
	// 		return (
	// 			<li key={artwork.id}>
	// 				<div className="img-wrapper-empty">No image available.</div>
	// 				<em>{artwork.title}</em><br/>
	// 				{artwork.principalOrFirstMaker}
	// 			</li>
	// 		);
	// 	}
	// })

	// return (
	// 	<div>
	// 		<strong>Results</strong>
	// 		<ul className="artwork-list">{artworkList}</ul>
	// 	</div>
	// );
	console.log('Results: ', props.results);
	return (
		<div>
			Results
		</div>
	);
}

export default Results;