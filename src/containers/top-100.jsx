import React, {Component} from 'react'; 
import $ from 'jquery'; 
import { connect } from 'react-redux'; 
import DetailView from '../components/detail-view.jsx';

class Top100 extends Component {
	constructor() {
		super(); 
		this.state = {
			// top100: [],
			// artDetail: []
		}; 

		// this.updateState = this.updateState.bind(this);
		// this.showDetail = this.showDetail.bind(this);
	}
	
	// componentWillMount() {
		// const url = "https://www.rijksmuseum.nl/api/en/collection/" +
		// "?key=cbUNdwH5" + 
		// "&ps=20" +
		// "&imgonly=True" + 
		// "&toppieces=True"; 

		// $.ajax({
		// 	url: url,
		// 	type: 'GET'
		// }).then(function(obj) {
		// 	return obj.artObjects;
		// }).then(array => this.updateState(array));
	// }

	// updateState(top100) {
	// 	this.setState({top100: top100});
	// }

	// updateStateArtDetail(artDetail) {
	// 	this.setState({artDetail: artDetail})
	// }

	// showDetail(event) {
	// 	// AJAX call to API (search by title)
	// 	// Set state with artwork

	// 	let url = "https://www.rijksmuseum.nl/api/en/collection?" + 
	// 	"key=cbUNdwH5" + 
	// 	"&q=" + event.currentTarget.innerHTML +
	// 	"&ps=1" +
	// 	"&imgonly=True" + 
	// 	"&toppieces=True";   
		
	// 	$.ajax({
	// 		url: url,
	// 		type: 'GET' 
	// 	}).then(function(obj) { 
	// 		return obj.artObjects; 
	// 	}).then(array => this.updateStateArtDetail(array));
	// }

	render() {
		return (
			<div>
				<strong>Explore</strong> top artworks housed in the museum.
				<div className="top100-detail-wrapper">
					<ul className="top100-list">
						{console.log(this.props.top100)}
						{this.props.top100.map((item) => {
							return <li key={item.thing}>{item.thing}</li>
						})}
					</ul>
					<div className="detail-view">
					</div>
				</div>
			</div>
		);
	}	
}
// disable UL
// {this.state.top100.map(artwork => 
// 	<li key={artwork.id} onClick={this.showDetail}>{artwork.title}</li>
// )}

// disable class detail-view
// <DetailView detail={this.state.artDetail} />

// Whatever is returned will show up as props
// inside of BookList
function mapStateToProps(state) {
	return {
		top100: state.top100 
	}; 
}

// Promote Top100 from a component to a container - it needs to know
// about this new method, detailView. Make it available as a prop.
export default connect(mapStateToProps)(Top100);