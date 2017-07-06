// Module imports
import React, { Component } from 'react';
import $ from 'jquery'; 
import { connect } from 'react-redux'; 

// Component imports
import Top20Artworks from '../containers/Top20Artworks'; 
// import SearchBar from './search-bar.jsx';
// import Results from './results.jsx';  

// Action imports
import { getTopArtworks } from '../actions/index'; 

class App extends Component {

	componentWillMount() {
		this.props.getTopArtworks();
	}

	render() {
		const topArtworks = this.props.topArtworks; 
		if (!topArtworks.length) {
			return (
				<div>
					<br /> 
					<br /> 
					<strong>Top 20 Artworks</strong>
					<br /> 
					<br /> 
					<em>Loading...</em>
				</div>
			);
		} else {
			return (
				<div>
					<br /> 
					<br /> 
					<strong>Top 20 Artworks</strong>
					<br /> 
					<br /> 
					<Top20Artworks topArtworks={topArtworks} />
				</div>
			);
		}	
	}
}

const mapStoreToProps = state => ({
	topArtworks: state.topArtworks,
});

const mapDispatchToProps = () => ({
	getTopArtworks,
});

export default connect(mapStoreToProps, mapDispatchToProps())(App);
