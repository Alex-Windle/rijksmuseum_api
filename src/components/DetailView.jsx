import React from 'react';

const DetailView = () => {
	if (false) {
		return (
			<div>
				<img src={artwork.webImage.url} alt="No image available." className="detail-img"/>
				<br/><br/>
				<p>{artwork.title}</p>
				<p>{artwork.principalOrFirstMaker}</p>
			</div>
		);
	} else {
		return (
			<div>
				<img src="http://lh3.ggpht.com/3bzg_jUPUnsPxCugY78L5mF-nOg9_l_7rMGkHVfTK0wUFU0J2kfZ_vMLT65F6nRDm5Ck7hy9iQoYCiWC2V1Becaj15E=s0" alt="No image available." className="detail-img"/>
				<br/><br/>
				<p>"Ten weepers from the tomb of Isabella of Bourbon"</p>
				<p>Renier van Thienen</p>
			</div>
		);
	}
}

export default DetailView;
