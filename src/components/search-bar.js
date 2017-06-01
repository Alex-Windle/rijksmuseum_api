import React, { Component } from 'react'; 

class SearchBar extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			term: '',
			popularSearches: ['Dummy search', 'Dummy search']
		};
	} 

	render(){
		// Problem: Refactor code to include clickHandler.
		const popularSearchesList = this.state.popularSearches.map(function(search) {
			return (
				<li>{search}</li>
			);
		}); 

		return (
			<div>
				<p>
					<strong>Search</strong> over 500,000 works archived in the Dutch national museum.<br/>
					<span className="small-text">Enter an artist, subject or medium.</span><br/>
					<input
						className="search-input"
						type="text"
						value={this.state.term}
						onChange={event => this.onInputChange(event.target.value)}
					/>
				</p>
				<div className="popular-searches-wrapper">
					<p>Popular searches</p>
					<ul className="popular-searches">
						{popularSearchesList}
						<li onClick={this.clickHandler.bind(this)}>Rembrandt</li>
						<li onClick={this.clickHandler.bind(this)}>Vermeer</li>
						<li onClick={this.clickHandler.bind(this)}>Franz Hals</li>
						<li onClick={this.clickHandler.bind(this)}>Francisco de Goya</li>
						<li onClick={this.clickHandler.bind(this)}>The Night Watch</li>
						<li onClick={this.clickHandler.bind(this)}>The Milkmaid</li>
						<li onClick={this.clickHandler.bind(this)}>Battle of Waterloo</li>
						<li onClick={this.clickHandler.bind(this)}>Girl in a Blue Dress</li>
						<li onClick={this.clickHandler.bind(this)}>Merry Drinker</li>
						<li onClick={this.clickHandler.bind(this)}>Nativity</li>
						<li onClick={this.clickHandler.bind(this)}>Mary and Joseph</li>
						<li onClick={this.clickHandler.bind(this)}>Resurrection</li>
						<li onClick={this.clickHandler.bind(this)}>Dutch porcelain</li>
					</ul>
				</div>	
			</div>
		);
	}

	onInputChange(searchWord) {
		// set state
		this.setState({term: searchWord}); 

		// pass props up to parent component for API call 
		this.props.onSearchTermChange(searchWord); 
	}

	clickHandler(event) {
		this.setState({term: event.currentTarget.innerHTML});
		this.props.onSearchTermChange(event.currentTarget.innerHTML);
	} 
}

export default SearchBar;