import React, { Component } from 'react'; 

class SearchBar extends Component {
	constructor(props) {
		super(props); 
		this.state = {term: ''};
	} 

	render(){
		console.log(this.state.term);
		return (
			<div>
				<input 
					type="text"
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
				/>
			</div>
		);
	}

	onInputChange(searchWord) {
		// set state
		this.setState({term: searchWord}); 

		// pass props up to parent component for API call 
		this.props.onSearchTermChange(searchWord); 
	}
}

export default SearchBar;