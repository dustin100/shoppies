import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/UI/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, HashRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<HashRouter basename="/shoppies/">
				<Fragment>
					<Header title="the shoppies" tagLine="Nominate your top 5 movies!" />
					<SearchBar />
					<Footer />
				</Fragment>
			</HashRouter>
		);
	}
}

export default App;
