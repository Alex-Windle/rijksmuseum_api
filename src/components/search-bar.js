import React, { Component } from 'react'; 
import PopularSearches from '../data.js';

class SearchBar extends Component {
	constructor(props) {
		super(props); 
		this.state = {term: ''};
	} 

	renderButton () {
		return PopularSearches.map(item => {
				return(<li key={item} onClick={this.clickHandler.bind(this)}>{item}</li>);
			}); 

	}

	render(){
		// const boopButton = this.state.boopTerm.map(function(item){
		// 	return (<li onClick={this.clickHandler}>{item}</li>);
		// })

		// const boopButton = (<li onClick={this.clickHandler.bind(this)}>Boop</li>);

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
						{this.renderButton()}
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