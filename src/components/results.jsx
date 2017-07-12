import React from 'react'; 

const Results = function(props) {
	console.log(props.results);
	const results = props.results.map(function(result) {
		if (result.webImage) {
			return (
				<li key={result.id}>
					<div id="caption">
						<em>{result.title}</em><br/>
						{result.principalOrFirstMaker}
						<br />
						<a href={result.links.web} target="_blank">Learn more</a>
					</div>
					<div className="img-wrapper"><img src={result.webImage.url} alt="No image available." /></div>
				</li>
			);
		} else {
			return (
				<li key={result.id}>
					<div id="caption">
						<em>{result.title}</em><br/>
						{result.principalOrFirstMaker}
						<br />
						<a href={result.links.web} target="_blank">Learn more</a>
					</div>
					<div className="img-wrapper-empty">No image available.</div>
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