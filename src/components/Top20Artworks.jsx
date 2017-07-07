// Module imports
import React, {Component} from 'react'; 
import $ from 'jquery'; 

// Component imports
import DetailView from '../components/DetailView'; 

class Top20Artworks extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			data: "Ten weepers from the tomb of Isabella of Bourbon, Renier van Thienen (attributed to), c. 1475 - c. 1476",
			principalOrFirstMaker: "Renier van Thienen",
			image: "http://lh5.ggpht.com/EHhJDrv4IB_89m9w9VlcYRYHYOuvU72iwD11oZ1HL3J5QcCMfmAD48CVxAtUwts9RT55W4lWSPI19wb1lSRZ9zecKMA=s0",
			link: "https://www.rijksmuseum.nl/en/collection/BK-AM-33-C"
		};

		this.handleClick = this.handleClick.bind(this);
	}; 

	handleClick(id) {
		// When the user clicks an image, the detail view appears. 
		// This function takes in an image id, searches the array 
		// for the image, and saves the data in component state.  
		// It passes the data to the DetailView component to display. 
		const { topArtworks } = this.props;
		let art = topArtworks.filter(artwork => {
			return artwork.id === id;
		}); 
		console.log(art[0])
		this.setState({
			data: art[0].longTitle,
			principalOrFirstMaker: art[0].principalOrFirstMaker,
			image: art[0].webImage.url,
			link: art[0].links.web
		});
	};

	render() {
		const { data, principalOrFirstMaker, image, link } = this.state;
		const { topArtworks } = this.props; 
		const renderList = topArtworks.map(artwork => {
			const { id, webImage, title } = artwork; 
			return (
				<li key={id} onClick={() => {return this.handleClick(id)}}>
					<img src={webImage.url} height="70px" /> 
					{title} 
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

