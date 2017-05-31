import React, { Component } from 'react'; 

export default class SearchBar extends Component {
	constructor() {
		super(); 
		this.state = {searchTerm: ''};
	} 

	handleChange(event) {
		this.setState({searchTerm: event.target.value}); 
		console.log(this.state.searchTerm);  
	}

	render(){
		return (
			<div>
				<input 
					type="text"
					value={this.state.searchTerm}
					onChange={this.handleChange.bind(this)}
				/>
			</div>
		);
	}
}