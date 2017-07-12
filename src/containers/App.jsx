// Module imports
import React, { Component } from 'react';
import { connect } from 'react-redux'; 

// Component imports
import Top20Artworks from '../components/Top20Artworks'; 
import SearchBar from '../components/SearchBar.jsx';
// import Results from '../components/results.jsx';  

// Action imports
import { getTopArtworks } from '../actions/index'; 
// import { searchByKeyword } from '../actions/index'; 

class App extends Component {
	componentWillMount() {
		this.props.getTopArtworks();
	}
	
	render() {
		const { topArtworks, searchedArtworks, searchByKeyword } = this.props; 
		return (
			<div>
				<h1>Rijksmuseum App</h1> 
				<br /> 
				<SearchBar />
				<br /><br />
				{!topArtworks.length ? <img src="../../style/loading.svg" /> : <Top20Artworks topArtworks={topArtworks} />}
			</div>
		);
	}	
}

const mapStoreToProps = state => ({
	topArtworks: state.topArtworks,
	// searchedArtworks: state.searchedArtworks,
	// Map artwork data to props, pass down to component to display
	// Display searched artwork in <Results /> component
});

const mapDispatchToProps = () => ({
	getTopArtworks,
	// searchByKeyword,
	// Dispatches action creator to reducers
});

export default connect(mapStoreToProps, mapDispatchToProps())(App);
