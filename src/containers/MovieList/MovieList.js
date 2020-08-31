import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../components/Cards/SingleCard/Card';

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
		};
	}

	fetchData = async () => {
		try {
			const listRequest = await axios.get('https://www.omdbapi.com/', {
				params: {
					apikey: '4790b397',
					type: 'movie',
					s: this.props.submittedSearch,
				},
			});
			this.setState({
				list: listRequest.data.Search,
			});
		} catch (err) {
			console.log(err);
		}
	};

	componentDidUpdate(prevProps) {
		if (this.props.submittedSearch !== prevProps.submittedSearch) {
			this.fetchData();
		}
	}

	nominateMovieHandler = (imdb) => {
		for (let movie in this.state.list) {
			if (this.state.list[movie].imdbID === imdb) {
				console.log(this.state.list[movie]);
			}
		}
	};

	render() {
		return (
			<Card list={this.state.list} nominateMovie={this.nominateMovieHandler} />
		);
	}
}

export default MovieList;
