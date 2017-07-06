// Module imports
import React, {Component} from 'react'; 
import $ from 'jquery'; 

// Component imports
import DetailView from '../components/DetailView'; 

class Top20Artworks extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}; 

	handleClick(e) {
		console.log(e.target);
	};

	render() {
		const { topArtworks } = this.props; 
		const renderList = topArtworks.map(artwork => {
			return (
				<li key={artwork.id} onClick={this.handleClick}>
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
}

export default Top20Artworks;

