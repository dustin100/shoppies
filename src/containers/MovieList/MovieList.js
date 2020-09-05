import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Cards from '../../components/Cards/Cards';
import Spinner from '../../components/UI/Spinner/Spinner';
import firebase from '../../firebase';
import Banner from '../../components/Banner/Banner'

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			nomList: [],
			storeImdbID: [],
			loading: false,
			error: false,
			count: 0,
		};
	}

	// Fetches Movies from http://www.omdbapi.com/
	fetchMovieData = async () => {
		this.setState({ loading: true });
		try {
			const listRequest = await axios.get('https://www.omdbapi.com/', {
				params: {
					apikey: '4790b397',
					type: 'movie',
					s: this.props.submittedSearch,
				},
			});

			// checks to see if movie is already in the nomList.
			// if it is it will be disabled so that it can't be added again
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
				loading: false,
			});
		} catch (err) {
			this.setState({
				error: true,
				loading: false,
			});
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
				count: nomsInArray.length,
			});
		});
		if (this.state.list) {
			this.fetchMovieData();
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.submittedSearch !== prevProps.submittedSearch) {
			this.fetchMovieData();
		}
	}

	//  When nominate button is clicked it stores movie details in Firebase
	nominateMovieHandler = (imdb) => {
		let currentCount = this.state.count;
		const dbRef = firebase.database().ref();
		for (let movie in this.state.list) {
			if (
				this.state.list[movie].imdbID === imdb &&
				this.state.nomList.length < 5
			) {
				dbRef.push(this.state.list[movie]);
				currentCount = currentCount + 1;
			}
		}
		// this resets the current api call list of movies after a new one has been added. I feel there is a more elegant solution...
		this.setState({
			list: this.state.list.map((item) => {
				if (item.imdbID === imdb) {
					item.disabled = true;
				}
				return item;
			}),
			count: currentCount,
		});
	};

	removeNominationHandler = (imdb) => {
		let currentCount = this.state.count;
		const dbRef = firebase.database().ref();
		dbRef.once('value', (snapshot) => {
			const data = snapshot.val();
			for (let firebaseKey in data) {
				if (data[firebaseKey].imdbID === imdb) {
					const itemRef = firebase.database().ref(firebaseKey);
					itemRef.remove();
					currentCount = currentCount - 1;
				}
			}
		});
		// this resets the current api call list of movies after a move has been removed. I feel there is a more elegant solution...
		this.setState({
			list: this.state.list.map((item) => {
				if (item.imdbID === imdb) {
					item.disabled = false;
				}
				return item;
			}),
			count: currentCount,
		});
	};

	render() {
		let cards = <Spinner />;
		let banner = null;
		if(this.state.count === 5) {
			banner = <Banner />
		}
		if (!this.state.loading) {
			cards = (
				<Cards
					list={this.state.list}
					onNominate={this.nominateMovieHandler}
					onRemove={this.removeNominationHandler}
					storeImdbID={this.state.storeImdbID}
					buttonText="Nominate"
					disabled={this.state.list.disabled}
					count={this.state.count}
				/>
			);
		}
		return <Fragment>{banner}{cards}</Fragment>;
	}
}

export default MovieList;
