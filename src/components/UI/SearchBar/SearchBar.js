import React, { Component, Fragment } from 'react';
import MovieList from '../../../containers/MovieList/MovieList';
import NominatedList from '../../../containers/NominatedList/NominatedList'

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: '',
			submittedSearch: '',
		};
	}

	handleChange = (e) => {
		this.setState({
			userInput: e.target.value.replace(/\s+/g, ' ').trim(),
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			submittedSearch: this.state.userInput,
		});
	};

	render() {
		return (
			<Fragment>
				<div className="wrapper">
					<form onSubmit={this.handleSubmit}>
						<label className="visuallyHidden" htmlFor="site-search">
							Search for movies:
						</label>
						<input
							className="searchSite"
							type="search"
							id="site-search"
							name="query"
							required
							placeholder="Find Movies to Nominate"
							aria-label="Search through site content"
							onChange={this.handleChange}
						/>

						<button className="searchBtn" type="submit">
							Search
						</button>
					</form>
				</div>
				<MovieList submittedSearch={this.state.submittedSearch} />
				<NominatedList />
			</Fragment>
		);
	}
}

export default SearchBar;
