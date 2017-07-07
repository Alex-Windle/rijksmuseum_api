import React from 'react';

const DetailView = (props) => {
	let { data } = props; 
	// The data prop includes the title, artist and year
	// Split the data string to display each separately
	data = data.split(', ');
	const { image, link } = props;

	return (
		<div className="detail-card">
			<div className="img-container">
				<img src={image} alt="No image available." />
			</div>
			<div className="title-artist-year-wrapper">
				<div className="title">{data[0]}</div>
				{data[1]}
				{data[2]}
			</div>
			<div className="learn-more">
				<a href={link} target="_blank">Learn more</a>
			</div>
		</div>
	);
}

export default DetailView;
