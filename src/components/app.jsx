import React, { Component } from 'react';
import $ from 'jquery'; 

import Top100 from '../containers/top-100.jsx';
import SearchBar from './search-bar.jsx';
import Results from './results.jsx';  

import { getArtworks } from '../actions/index'; 

export default class App extends Component {
	// constructor() {
	// 	super(); 
	// 	this.state = {
	// 		artworks: []
	// 	}; 
		
	// 	this.searchArtwork = this.searchArtwork.bind(this);
	// }

	// searchArtwork(term) {
	// 	let url = "https://www.rijksmuseum.nl/api/en/collection?" + 
	// 	"key=cbUNdwH5" + 
	// 	"&q=" + term +
	// 	"&imgonly=True" + 
	// 	"&toppieces=True";   
		
	// 	// How does the arrow function preserve the context of "this"?
	// 	$.ajax({
	// 		url: url,
	// 		type: 'GET' 
	// 	}).then(function(obj) { 
	// 		return obj.artObjects; 
	// 	}).then(array => this.updateState(array));
	// }

	// updateState(artworks) {
	// 	this.setState({artworks: artworks}); 
	// }

	render() {
		return (
		  <div>
		  	<br/>
		  	<h3><strong>Rijksmuseum App</strong></h3>
		  	<br/>
		  	Top 100
		  	<br/><br />
		  	Searchbar
		  	<br/><br/>
		  	Results
		  	<br/><br/>
		  </div>
		);
	}
}
// <Top100 />
// <SearchBar onSearchTermChange={term => this.searchArtwork(term)} />
// <Results artworks={this.state.artworks} />
