function() {
	// fetch data from API
	const url = "https://www.rijksmuseum.nl/api/en/collection/" +
		"?key=cbUNdwH5" + 
		"&ps=20" +
		"&imgonly=True" + 
		"&toppieces=True"; 

		$.ajax({
			url: url,
			type: 'GET'
		}).then(function(obj) {
			return obj.artObjects;
		}).then(array => console.table(array));
	}

	// return a data object to populate state
}