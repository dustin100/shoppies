import React, { Component } from 'react';
import axios from 'axios';
import Cards from '../../components/Cards/Cards';
import firebase from '../../firebase';

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			nomList: [],
			storeImdbID: [],
			count: 0,
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

			// checks to see if item is already in the nomList.
			// if it is it will be disabled via props so that it can't be added again
			const editedObject = listRequest.data.Search.map((item) => {
				if (this.state.storeImdbID.includes(item.imdbID)) {
					item.disabled = true;
				} else {
					item.disabled = false;
				}
				return item;
			});

			this.setState({
				list: editedObject,
			});
		} catch (err) {
			console.log(err);
		}
	};

	componentDidMount() {
		// grabs data from firebase and coverts the object into an array and adds it to state
		const dbRef = firebase.database().ref();
		dbRef.on('value', (snapshot) => {
			const data = snapshot.val();
			const nomsInArray = [];
			const storeImdbID = [];
			for (let key in data) {
				nomsInArray.push(data[key]);
				storeImdbID.push(data[key].imdbID);
			}

			this.setState({
				nomList: nomsInArray,
				storeImdbID: storeImdbID,
			});
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.submittedSearch !== prevProps.submittedSearch) {
			this.fetchMovieData();
		}
	}

	//  When nominate button is clicked it stores movie details in Firebase
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
		// this resets the current api call list of movies after a new one has been added. I'm not happy about this and I'm sure there's a way to improve it
		this.setState({
			list: this.state.list.map((item) => {
				if (item.imdbID === imdb) {
					item.disabled = true;
				}
				return item;
			}),
			count: (this.state.count = this.state.count + 1),
		});
	};

	removeNominationHandler = (imdb) => {
		const dbRef = firebase.database().ref();
		dbRef.once('value', (snapshot) => {
			const data = snapshot.val();
			for (let firebaseKey in data) {
				if (data[firebaseKey].imdbID === imdb) {
					const itemRef = firebase.database().ref(firebaseKey);
					itemRef.remove();
				}
			}
		});
		// this resets the current api call list of movies after a move has been removed. I'm not happy about this and I'm sure there's a way to improve it
		this.setState({
			list: this.state.list.map((item) => {
				if (item.imdbID === imdb) {
					item.disabled = false;
				}
				return item;
			}),
		});
	};

	render() {
		return (
			<Cards
				list={this.state.list}
				onNominate={this.nominateMovieHandler}
				onRemove={this.removeNominationHandler}
				storeImdbID={this.state.storeImdbID}
				buttonText="Nominate"
				disabled={this.state.list.disabled}
			/>
		);
	}
}

export default MovieList;
