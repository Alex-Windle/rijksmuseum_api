// Module imports
import React, {Component} from 'react'; 
import $ from 'jquery'; 

// Component imports
import Artwork from '../components/Artwork'; 
import DetailView from '../components/DetailView'; 

export default (props) => {
	const { topArtworks } = props; 

	const renderList = topArtworks.map(artwork => {
		return (
			<li key={artwork.id}>
				<Artwork 
					title={artwork.title} 
					artist={artwork.principalOrFirstMaker} 
					image={artwork.webImage.url} 
				/>
			</li>
		);
	});

	return (
		<div>
			<strong>Explore</strong> top artworks housed in the museum.
			<div className="top100-detail-wrapper">
				<ul className="top100-list">
					{renderList}
				</ul>
				<div className="detail-view">
					<DetailView />
				</div>
			</div>
		</div>
	);
}
