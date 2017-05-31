import React, { Component } from 'react';
import $ from 'jquery'; 

import SearchBar from './search-bar'; 

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
	searchArtwork(term) {
		let endpoint = "https://www.rijksmuseum.nl/api/en/collection?key=cbUNdwH5&q=" + term + "&ps=100&imgonly=True&toppieces=True"; 
		
		fetch(endpoint)
			.then(function(response) {
				return response.json(); 
			}).then(function(obj) {
				console.log(obj);
			})
	}

	render() {
		return (
		  <div>
		  	Museum App
		  	<SearchBar onSearchTermChange={term => this.searchArtwork(term)} />
		  </div>
		);
	}
}
