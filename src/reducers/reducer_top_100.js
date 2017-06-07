import $ from 'jquery'; 

export default function() {
	// fetch data from API
	// const url = "https://www.rijksmuseum.nl/api/en/collection/" +
	// 	"?key=cbUNdwH5" + 
	// 	"&ps=20" +
	// 	"&imgonly=True" + 
	// 	"&toppieces=True"; 

	// 	$.ajax({
	// 		url: url,
	// 		type: 'GET'
	// 	}).then(function(obj) {
	// 		return obj.artObjects;
	// 	}).then(array => {
	// 		console.log("Ajax runs...");
	// 		return array;
	// 	});

	// return a data object to populate state
	return [
		{thing: "thing"}, 
		{thing: "thing2"}
	]
}