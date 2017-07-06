import React from 'react'; 

export default (props) => {
	const { title, artist, image } = props;
	return (
		<div>
			<em>{title}</em>
			<br /> 
			By {artist}
		</div>
	);
}