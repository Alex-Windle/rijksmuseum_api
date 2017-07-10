import React from 'react';

const DetailView = (props) => {
	let { data } = props; 
	// The data prop includes the title, artist and year
	// Split the data string to display each separately
	data = data.split(', ');
	let dataLine1 = data[0];
	let dataLine2 = data[1];
	let dataLine3 = data[2];

	const { image, link } = props;

	const renderDataLine1 = (string) => {
		if (string.length > 55) {
			string = string.split('').slice(0, 55).join('') + "...";
			return string; 
		} else {
			return dataLine1; 
		}
	};

	return (
		<div className="detail-card">
			<div className="img-container">
				<img src={image} alt="No image available." className="detail-card-img"/>
			</div>
			<div className="title-artist-year-wrapper">
				<div className="title">{renderDataLine1(dataLine1)}</div>
				{dataLine2}
				{dataLine3}
			</div>
			<div className="learn-more">
				<a href={link} target="_blank">Learn more</a>
			</div>
		</div>
	);
}

export default DetailView;
