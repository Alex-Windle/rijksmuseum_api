// Module imports
import React, { Component } from 'react';
import $ from 'jquery'; 
import { connect } from 'react-redux'; 

// Component imports
import Top100 from '../containers/top-100.jsx';
import SearchBar from './search-bar.jsx';
import Results from './results.jsx';  

// Action imports
import { getTopArtworks } from '../actions/index'; 

class App extends Component {

	componentWillMount() {
		this.props.getTopArtworks();
	}

	render() {
		
		const topArtworks = this.props.topArtworks; 
		
		console.log("component pulls in 20 artworks:", topArtworks);

		if (topArtworks.length < 1) {
			return <div>Loading...</div>;
		} else {
			return (
				<div>
					Top 20 Artworks
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
