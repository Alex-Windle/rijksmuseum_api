import $ from 'jquery'; 

export default function() {
	// fetch data from API
	let data;

	const url = "https://www.rijksmuseum.nl/api/en/collection/" +
		"?key=cbUNdwH5" + 
		"&ps=20" +
		"&imgonly=True" + 
		"&toppieces=True"; 

	// $.ajax({
	// 		url: url,
	// 		type: 'GET'
	// 	}).then(function(obj) {
	// 		let ajaxCall; 
	// 		ajaxCall = [...obj.artObjects];
	// 		return ajaxCall;
	// 	}).then(function(ajaxCall) {
	// 		// save to data variable
	// 		data = [...ajaxCall]; 
	// 	}).then(function() {
	// 		// grab data variable
	// 		console.log("Data variable to return: ", data);
	// 		return data;
	// 	})

	// return a data object to populate state

	// return [
	// 	{title: "Artwork 1"}, 
	// 	{title: "Artwork 2"}
	// ]
	return (
		
	);
}