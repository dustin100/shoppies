import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/UI/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Fragment>
					<Header title="Shoppies" tagLine="nominate your favorite movies" />
					<SearchBar />
					<Footer />
				</Fragment>
			</BrowserRouter>
		);
	}
}

export default App;
