// Module imports
import React, { Component } from 'react';
import { connect } from 'react-redux'; 

// Component imports
import Top20Artworks from '../components/Top20Artworks'; 
import SearchBar from '../components/SearchBar.jsx';
// import Results from '../components/results.jsx';  

// Action imports
import { getTopArtworks } from '../actions/index'; 
import { searchByKeyword } from '../actions/index'; 

class App extends Component {
	componentWillMount() {
		this.props.getTopArtworks();
	}

	// const onSearchTermChange = (term) => {
		// Fire searchByKeyword action creator
		// The action creator makes the API call
		// The payload is the artwork detail information 
		// The payload is saved to the Redux store

	// }

	render() {
		const topArtworks = this.props.topArtworks; 
		return (
			<div>
				<h1>Rijksmuseum App</h1> 
				<br /> 
				{!topArtworks.length ? <img src="../../style/loading.svg" /> : <Top20Artworks topArtworks={topArtworks} />}
				<SearchBar onSearchTermChange={(searchWord) => {
					// Fire the actionCreator here!!
					// If that doesn't work, do it above the render...
					this.searchByKeyword(searchWord)}
				} />
			</div>
		);
	}	
}

const mapStoreToProps = state => ({
	topArtworks: state.topArtworks,
	// Map artwork data to props, pass down to component to display
	// Display searched artwork in <Results /> component
});

const mapDispatchToProps = () => ({
	getTopArtworks,
	// Dispatches action creator to reducers
});

export default connect(mapStoreToProps, mapDispatchToProps())(App);
