import React, { Component, Fragment } from 'react';
import MovieList from '../../../containers/MovieList/MovieList';
import NominatedList from '../../../containers/NominatedList/NominatedList';
import Instructions from '../../Instructions/Instructions';
import NotFound from '../../NotFound/NoutFound';
import { Route, withRouter, Switch } from 'react-router-dom';
import classes from './SearchBar.module.css';

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
			userInput: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			submittedSearch: this.state.userInput.replace(/\s+/g, ' ').trim(),
			userInput: '',
		});
		this.props.history.push('/results');
	};

	render() {
		return (
			<Fragment>
				<div className="wrapper">
					<div className={classes.SearchBar}>
						<form onSubmit={this.handleSubmit}>
							<label className="visuallyHidden" htmlFor="site-search">
								Search for movies:
							</label>
							<input
								type="search"
								id="site-search"
								name="query"
								required
								placeholder="Find Movies to Nominate"
								aria-label="Search for movie"
								onChange={this.handleChange}
								value={this.state.userInput}
							/>

							<button className={classes.SearchBtn} type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
				<Switch>
					<Route path="/" exact component={Instructions} />

					<Route
						path="/results"
						render={(props) => (
							<MovieList
								{...props}
								submittedSearch={this.state.submittedSearch}
							/>
						)}
					/>

					<Route path="/nominates" exact component={NominatedList} />
					<Route component={NotFound} />
				</Switch>
			</Fragment>
		);
	}
}

export default withRouter(SearchBar);
