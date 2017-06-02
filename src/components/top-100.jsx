import React, {Component} from 'react'; 
import $ from 'jquery'; 

import DetailView from './detail-view.jsx';

class Top100 extends Component {
	constructor() {
		super(); 
		this.state = {
			top100: [],
			artDetail: []
		}; 

		this.updateState = this.updateState.bind(this);
		this.showDetail = this.showDetail.bind(this);
	}
	
	componentWillMount() {
		const url = "https://www.rijksmuseum.nl/api/en/collection/" +
		"?key=cbUNdwH5" + 
		"&ps=20" +
		"&imgonly=True" + 
		"&toppieces=True"; 

		$.ajax({
			url: url,
			type: 'GET'
		}).then(function(obj) {
			return obj.artObjects;
		}).then(array => this.updateState(array));
	}

	updateState(top100) {
		this.setState({top100: top100});
	}

	updateStateArtDetail(artDetail) {
		this.setState({artDetail: artDetail})
	}

	showDetail(event) {
		// AJAX call to API (search by title)
		// Set state with artwork

		let url = "https://www.rijksmuseum.nl/api/en/collection?" + 
		"key=cbUNdwH5" + 
		"&q=" + event.currentTarget.innerHTML +
		"&ps=1" +
		"&imgonly=True" + 
		"&toppieces=True";   
		
		$.ajax({
			url: url,
			type: 'GET' 
		}).then(function(obj) { 
			return obj.artObjects; 
		}).then(array => this.updateStateArtDetail(array));
	}

	render() {
		return (
			<div>
				<strong>Explore</strong> top artworks housed in the museum.
				<div className="top100-detail-wrapper">
					<ul className="top100-list">
						{this.state.top100.map(artwork => 
							<li key={artwork.id} onClick={this.showDetail}>{artwork.title}</li>
						)}
					</ul>
					<div className="detail-view">
						<DetailView detail={this.state.artDetail} />
					</div>
				</div>
			</div>
		);
	}	
}

export default Top100;