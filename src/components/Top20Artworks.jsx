// Module imports
import React, {Component} from 'react'; 
import $ from 'jquery'; 

// Component imports
import DetailView from '../components/DetailView'; 

class Top20Artworks extends Component {
	constructor(props) {
		super(props);

		this.state = { artwork: {} };
		this.handleClick = this.handleClick.bind(this);
	}; 

	handleClick(number) {
		console.log("clicked id #", number);

		// When the user clicks an image, a detail view appears. 

		// Where does this information come from?

		// This component has an abundance of data available through props.
		// For example, id, link to Rijksmuseum page, title, artist, place of 
		// production, etc. 

		// This function should take in an id, search the artworks array 
		// for the item by id, then save the artwork object blob to the 
		// component state. 

		// Then, pass down the information you would like to display to the 
		// DetailView component. 

		const { topArtworks } = this.props;
		let art = topArtworks.filter(artwork => {
			return artwork.id === number;
		}); 
		this.setState({ artwork: art[0] });
	};

	render() {
		console.log(this.state);
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
						<DetailView />
					</div>
				</div>
			</div>
		);
	}
}

export default Top20Artworks;

