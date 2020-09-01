import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../components/Cards/SingleCard/Card';
import firebase from '../../firebase';

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			nomList: [],
		};
	}

	// Fetches Movies from http://www.omdbapi.com/
	fetchMovieData = async () => {
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

	componentDidMount() {
		// grabs data from firebase and coverts the object into an array and adds it to state
		const dbRef = firebase.database().ref();
		dbRef.on('value', (result) => {
			const data = result.val();
			const nomsInArray = [];
			for (let key in data) {
				nomsInArray.push(data[key]);
			}

			this.setState({
				nomList: nomsInArray,
			});
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.submittedSearch !== prevProps.submittedSearch) {
			this.fetchMovieData();
		}
	}

	nominateMovieHandler = (imdb) => {
		const dbRef = firebase.database().ref();
		for (let movie in this.state.list) {
			if (
				this.state.list[movie].imdbID === imdb &&
				this.state.nomList.length < 5
			) {
				dbRef.push(this.state.list[movie]);
			}
		}
	};

	render() {
		return (
			<Card
				list={this.state.list}
				onNominateMovie={this.nominateMovieHandler}
				nomList={this.state.nomList}
			/>
		);
	}
}

export default MovieList;
