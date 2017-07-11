// Module imports
import React, {Component} from 'react'; 
import $ from 'jquery'; 

// Component imports
import DetailView from '../components/DetailView'; 

class Top20Artworks extends Component {
	constructor(props) {
		super(props);
		// State holds data to pass down to child 
		// Initial state populates with a specific artwork
		// Users click to change state
		this.state = { 
			data: "Ten weepers from the tomb of Isabella of Bourbon, Renier van Thienen (attributed to), c. 1475 - c. 1476",
			principalOrFirstMaker: "Renier van Thienen",
			image: "http://lh5.ggpht.com/EHhJDrv4IB_89m9w9VlcYRYHYOuvU72iwD11oZ1HL3J5QcCMfmAD48CVxAtUwts9RT55W4lWSPI19wb1lSRZ9zecKMA=s0",
			link: "https://www.rijksmuseum.nl/en/collection/BK-AM-33-C"
		};
		this.handleClick = this.handleClick.bind(this);
	}; 

	handleClick(id) {
		// When users click an image, it appears in a detail view. 
		// This function takes in an id, searches the props  
		// for the image, and saves the data to component state.  
		// The data is passed to the child to display. 
		const { topArtworks } = this.props;
		let art = topArtworks.filter(artwork => {
			return artwork.id === id;
		}); 
		this.setState({
			data: art[0].longTitle,
			principalOrFirstMaker: art[0].principalOrFirstMaker,
			image: art[0].webImage.url,
			link: art[0].links.web
		});
	};

	render() {
		// Passes data to child 
		const { data, principalOrFirstMaker, image, link } = this.state;
		// Renders data in component
		const { topArtworks } = this.props; 
		const renderList = topArtworks.map(artwork => {
			const { id, webImage, title } = artwork; 
			return (
				<li key={id} onClick={() => {return this.handleClick(id)}}>
					<img src={webImage.url} /> 
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
						<DetailView 
							data={data}
							principalOrFirstMaker={principalOrFirstMaker}
							image={image}
							link={link}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Top20Artworks;
