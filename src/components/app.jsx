import React, { Component } from 'react';
import $ from 'jquery'; 

import Top100 from './top-100.jsx';
import SearchBar from './search-bar.jsx';
import Results from './results.jsx';  

export default class App extends Component {
	constructor() {
		super(); 
		this.state = {
			artworks: []
		}; 
		
		this.searchArtwork = this.searchArtwork.bind(this);
	}

	searchArtwork(term) {
		let url = "https://www.rijksmuseum.nl/api/en/collection?" + 
		"key=cbUNdwH5" + 
		"&q=" + term +
		"&imgonly=True" + 
		"&toppieces=True";   
		
		// How does the arrow function preserve the context of "this"?
		$.ajax({
			url: url,
			type: 'GET' 
		}).then(function(obj) { 
			return obj.artObjects; 
		}).then(array => this.updateState(array));
	}

	updateState(artworks) {
		this.setState({artworks: artworks}); 
	}

	render() {
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
