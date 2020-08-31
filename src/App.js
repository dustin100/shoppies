import React, { Component } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/UI/SearchBar/SearchBar';

class App extends Component {
	render() {
		return (
			<div>
				<Header title="Shoppies" tagLine="nominate your favorite movies" />
				<SearchBar />
			</div>
		);
	}
}

export default App;
