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

	componentDidMount() {
		fetch("https://www.rijksmuseum.nl/api/en/collection/?key=cbUNdwH5&ps=20&imgonly=True&toppieces=True")
			.then(resp => resp.json())
			.then(resp => {
				this.props.getTopArtworks(resp.artObjects);
			})
	}

	render() {
		const topArtworks = this.props.topArtworks; 
		console.log("component pulls in 20 artworks:", topArtworks);

		return (
		  <div>
		  	<br/>
		  	<h3><strong>Rijksmuseum App</strong></h3>
		  	<br/>
		  	Top 20:
		  	<ul>
		  		<li>Show loading (during call) or artwork titles here when available</li>
		  	</ul>
		  	<div></div>
		  	<br/><br />
		  	Searchbar
		  	<br/><br/>
		  	Results
		  	<br/><br/>
		  </div>
		);
	}
}

const mapStoreToProps = state => ({
	topArtworks: state.topArtworks,
});

const mapDispatchToProps = () => ({getTopArtworks});

export default connect(mapStoreToProps, mapDispatchToProps())(App);
