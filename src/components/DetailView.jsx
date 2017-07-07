import React from 'react';

const DetailView = (props) => {
	let { data } = props; 
	// The data prop includes the title, artist and year
	// Split the data string to display each separately
	data = data.split(', ');
	const { image, link } = props;

	return (
		<div>
			<img src={image} alt="No image available." className="detail-img"/>
			<br/><br/>
			<p>{data[0]}</p>
			<em><p>{data[1]}</p></em>
			<p style={{fontSize:"13px"}}>{data[2]}</p>
			<a href={link} target="_blank">Learn more</a>
		</div>
	);
}

export default DetailView;
