import React, {Component} from 'react'; 
import $ from 'jquery'; 

export default (props) => {
	const { topArtworks } = props; 
	console.log(topArtworks); 

	const renderArtworks = (artworks) => {
		return artworks.map(artwork => <li key={artwork.id}>{artwork.title}</li>); 
	}; 

	return (
		<div>
			<strong>Explore</strong> top artworks housed in the museum.
			<div className="top100-detail-wrapper">
				<ul className="top100-list">
					{renderArtworks(topArtworks)}
				</ul>
				<div className="detail-view">
				</div>
			</div>
		</div>
	);
}
