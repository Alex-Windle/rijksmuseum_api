import React, { Component } from 'react';
import $ from 'jquery'; 

import SearchBar from './search-bar';
import Results from './results';  

// (1) fetch data
// fetch("https://www.rijksmuseum.nl/api/en/collection/sk-c-5?key=cbUNdwH5")
// 	.then(function(response) {
// 		return response.json(); 
// 	}).then(function(obj) { 
// 		console.log("Title: ", obj.artObject.title);
// 		console.log("Artist: ", obj.artObject.principalOrFirstMaker);
// 		console.log("Date: ", obj.artObject.dating.presentingDate); 
// 		console.log("Medium: ", obj.artObject.physicalMedium);
// 		console.log("Image: ", obj.artObject.webImage.url);
// 	}); 

// fetch("https://www.rijksmuseum.nl/api/en/collection?key=cbUNdwH5&q=rembrandt&ps=100&imgonly=True&toppieces=True")
// 	.then(function(response) {
// 		return response.json(); 
// 	}).then(function(obj) { 
// 		console.log(obj);
// 	}); 

// (2) ajax call 
// $.ajax({
// 	url: "https://www.rijksmuseum.nl/api/en/collection/sk-c-5?key=cbUNdwH5&format=json",
// 	type: 'GET' 
// }).then(function(obj) {
// 	console.log("Title: ", obj.artObject.title);
// 	console.log("Artist: ", obj.artObject.principalOrFirstMaker);
// 	console.log("Date: ", obj.artObject.dating.presentingDate); 
// 	console.log("Medium: ", obj.artObject.physicalMedium);
// 	console.log("Image: ", obj.artObject.webImage.url);  
// 	}); 

export default class App extends Component {
	// state holds list of artworks
	constructor() {
		super(); 
		this.state = {artworks: []}; 

		this.searchArtwork = this.searchArtwork.bind(this);
	}

	searchArtwork(term) {
		let endpoint = "https://www.rijksmuseum.nl/api/en/collection?key=cbUNdwH5&q=" + term;   
		
		$.ajax({
			url: endpoint,
			type: 'GET' 
		}).then(function(obj) { 
			return obj.artObjects; 
		}).then(array => this.updateState(array)); 
	}

	updateState(artworks) {
		this.setState({artworks: artworks}); 
	}

	render() {
		console.log(this.state.artworks);
		return (
		  <div>
		  	Museum App
		  	<SearchBar onSearchTermChange={term => this.searchArtwork(term)} />
		  	<Results />
		  </div>
		);
	}
}
