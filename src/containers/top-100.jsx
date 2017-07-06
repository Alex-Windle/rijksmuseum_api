import React, {Component} from 'react'; 
import $ from 'jquery'; 
import { connect } from 'react-redux'; 

class Top100 extends Component {

	render() {
		return (
			<div>
				<strong>Explore</strong> top artworks housed in the museum.
				<div className="top100-detail-wrapper">
					<ul className="top100-list">
						
					</ul>
					<div className="detail-view">
					</div>
				</div>
			</div>
		);
	}	
}

function mapStateToProps(state) {
	return {
		top100: state.top100 
	}; 
}

export default connect(mapStateToProps)(Top100);
