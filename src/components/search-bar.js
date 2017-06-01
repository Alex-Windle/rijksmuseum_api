import React, { Component } from 'react'; 

class SearchBar extends Component {
	constructor(props) {
		super(props); 
		this.state = {term: ''};
	} 

	render(){
		return (
			<div>
				<p>
					<strong>Search</strong> over 500,000 works archived in the Dutch national museum.<br/>
					<span className="small-text">Enter an artist, subject or medium.</span><br/><br/>
					<input
						type="text"
						value={this.state.term}
						onChange={event => this.onInputChange(event.target.value)}
					/>
				</p>
				<p>Popular searches:</p>
				<ul className="popular-searches">
					<li>Rembrandt</li>
					<li>Vermeer</li>
					<li>Francisco Goya</li>
					<li>Franz Hals</li>
					<li>The Night Watch</li>
					<li>The Milkmaid</li>
					<li>Battle of Waterloo</li>
					<li>Girl in a Blue Dress</li>
					<li>Merry Drinker</li>
					<li>Nativity</li>
					<li>Mary and Joseph</li>
					<li>Resurrection</li>
					<li>Dutch porcelain</li>

				</ul>	
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