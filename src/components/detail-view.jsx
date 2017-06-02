import React from 'react';

const DetailView = function(props) {
	
	if (props.detail.length > 0) {
		console.log("props", props.detail[0]);
		const artwork = props.detail[0];

		return (
			<div>
				<img src={artwork.webImage.url} alt="No image available." className="detail-img"/>
				<br/><br/>
				<p>{artwork.title}</p>
				<p>{artwork.principalOrFirstMaker}</p>
			</div>
		);
	} else {
		return (<div>Choose an artwork.</div>);
	}
}

export default DetailView;