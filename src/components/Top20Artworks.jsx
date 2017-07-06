// Module imports
import React, {Component} from 'react'; 
import $ from 'jquery'; 

// Component imports
import DetailView from '../components/DetailView'; 

export default (props) => {
	const { topArtworks } = props; 

	const renderList = topArtworks.map(artwork => {
		return (
			<li key={artwork.id}>
				<img src={artwork.webImage.url} height="70px" /> 
				{artwork.title} 
			</li>
		);
	});

	return (
		<div>
			<strong>Explore</strong> top artworks housed in the museum.
			<div className="top20-detail-wrapper">
				<ul className="top20-list">
					{renderList}
				</ul>
				<div className="detail-view">
					<DetailView />
				</div>
			</div>
		</div>
	);
}
