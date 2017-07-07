// Module imports
import React, { Component } from 'react';
import { connect } from 'react-redux'; 

// Component imports
import Top20Artworks from '../components/Top20Artworks'; 
// import SearchBar from './search-bar.jsx';
// import Results from './results.jsx';  

// Action imports
import { getTopArtworks } from '../actions/index'; 

class App extends Component {
	componentWillMount() {
		this.props.getTopArtworks();
	}

	render() {
		const topArtworks = this.props.topArtworks; 
		return (
			<div>
				<h1>Rijksmuseum App</h1> 
				<br /> 
				{!topArtworks.length ? <img src="../../style/loading.svg" /> : <Top20Artworks topArtworks={topArtworks} />}
			</div>
		);
	}	
}

const mapStoreToProps = state => ({
	topArtworks: state.topArtworks,
});

const mapDispatchToProps = () => ({
	getTopArtworks,
});

export default connect(mapStoreToProps, mapDispatchToProps())(App);
