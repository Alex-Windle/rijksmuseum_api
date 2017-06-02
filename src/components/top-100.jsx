import React from 'react'; 

const Top100 = function(){
	
	function renderTop100() {
		console.log('test');
	}

	return (
		<div>
			<strong>Explore</strong> top artworks housed in the museum.
			<ul>
				{renderTop100()}
			</ul>
		</div>
	);
}


export default Top100;