import React from 'react'; 

const Results = function(props) {
	const results = props.results.map(function(result) {
		if (result.webImage) {
			return (
				<li key={result.id}>
					<div className="img-wrapper"><img src={result.webImage.url} alt="No image available." /></div>
					<em>{result.title}</em><br/>
					{result.principalOrFirstMaker}
				</li>
			);
		} else {
			return (
				<li key={result.id}>
					<div className="img-wrapper-empty">No image available.</div>
					<em>{result.title}</em><br/>
					{result.principalOrFirstMaker}
				</li>
			);
		}
	})

	return (
		<div>
			<strong>Results</strong>
			<ul className="artwork-list">{results}</ul>
		</div>
	);
}

export default Results;