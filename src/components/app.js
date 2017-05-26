import React, { Component } from 'react';
import $ from 'jquery'; 

// (1) fetch data
fetch("https://www.rijksmuseum.nl/api/en/collection/sk-c-5?key=cbUNdwH5")
	.then(function(response) {
		return response.json(); 
	}).then(function(obj) { 
		console.log("Title: ", obj.artObject.title);
		console.log("Artist: ", obj.artObject.principalOrFirstMaker);
		console.log("Date: ", obj.artObject.dating.presentingDate); 
		console.log("Medium: ", obj.artObject.physicalMedium);
		console.log("Image: ", obj.artObject.webImage.url);
	}); 

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

  render() {
    return (
      <div>
      	Museum App
      </div>
    );
  }
}
