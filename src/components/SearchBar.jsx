import React, { Component } from 'react'; 
import PopularSearches from '../data_popular_searches.js';
import Results from './Results'; 

class SearchBar extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			term: 'Vermeer',
			results: [],
		};
	} 

	componentWillMount() {
		this.getResults(this.state.term);
	}

	renderButtons () {
		return PopularSearches.map(item => {
			return(<li key={item} onClick={this.buttonHandler.bind(this)}>{item}</li>);
		}); 
	}

	render(){
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
						{this.renderButtons()}
					</ul>
				</div>	
				<br /><br /> 
				<Results results={this.state.results} /> 
			</div>
		);
	}

	onInputChange(keyword) {
		// set state
		this.setState({term: keyword}); 

		// Capture the search term
		// pass props up to parent component, which fires 
		// the action creator for API call 
		// this.props.onSearchTermChange(keyword); 
		this.getResults(keyword);
	}

	buttonHandler(event) {
		this.setState({term: event.currentTarget.innerHTML});
		// this.props.onSearchTermChange(event.currentTarget.innerHTML);
		this.getResults(event.currentTarget.innerHTML);
	} 

	getResults(keyword) {
		fetch(`https://www.rijksmuseum.nl/api/en/collection/?key=cbUNdwH5&p=0&ps=5&imgonly=True&q=${keyword}`)
			.then(resp => resp.json())
			.then(resp => resp.artObjects)
			.then(results => this.setState({results: results}));
	}
}

export default SearchBar;
