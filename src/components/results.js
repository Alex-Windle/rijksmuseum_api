import React, {Component} from 'react'; 

class Results extends Component {
	renderList() {
		return(<li>Hello world!</li>);
	}
	
	render() {
		console.log(this.props.artworks);
		return (
			<div>
				Results
				<ul>
					{this.renderList()}
				</ul>
			</div>
		); 
	}
}

export default Results;