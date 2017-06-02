import React, { Component } from 'react';
import $ from 'jquery'; 

import Top100 from './top-100.jsx';
import SearchBar from './search-bar.jsx';
import Results from './results.jsx';  

export default class App extends Component {
	constructor() {
		super(); 
		this.state = {
			top100: [],
			artworks: []
		}; 
		
		this.searchArtwork = this.searchArtwork.bind(this);
		this.getTop100 = this.getTop100.bind(this);
	}

	componentWillMount() {
		this.getTop100();
	}

	getTop100() {
		const url = "https://www.rijksmuseum.nl/api/nl/collection/" +
		"?key=cbUNdwH5" + 
		"&ps=100" +
		"&imgonly=True" + 
		"&toppieces=True"; 

		$.ajax({
			url: url,
			type: 'GET'
		}).then(function(obj) {
			return obj.artObjects;
		}).then(function(array) {
			// Uncaught ReferenceError: updateStateTop100 is not defined
			// updateStateTop100(arr);

			// Uncaught TypeError: this.updateStateTop100 is not a function
			// this.updateStateTop100(array);
			return array;
		}).then(array => this.updateStateTop100(array));
	}

	searchArtwork(term) {
		let endpoint = "https://www.rijksmuseum.nl/api/en/collection?" + 
		"key=cbUNdwH5" + 
		"&q=" + term +
		"&imgonly=True" + 
		"&toppieces=True";   
		
		// How does the arrow function preserve the context of "this"?
		$.ajax({
			url: endpoint,
			type: 'GET' 
		}).then(function(obj) { 
			return obj.artObjects; 
		}).then(array => this.updateState(array));
	}

	updateStateTop100(top100) {
		console.log("updateStateTop100() runs");
		this.setState({top100: top100});
	}

	updateState(artworks) {
		this.setState({artworks: artworks}); 
	}

	render() {
		
		console.log("this.state.top100", this.state.top100);

		return (
		  <div>
		  	<br/>
		  	<h3><strong>Rijksmuseum App</strong></h3>
		  	<br/>
		  	<Top100 />
		  	<br/>
		  	<SearchBar onSearchTermChange={term => this.searchArtwork(term)} />
		  	<br/><br/>
		  	<Results artworks={this.state.artworks} />
		  	<br/><br/>
		  </div>
		);
	}
}
