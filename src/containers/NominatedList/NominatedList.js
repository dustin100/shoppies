import React, { Component } from 'react';
import Card from '../../components/Cards/SingleCard/Card';
import firebase from '../../firebase';
import MovieList from '../MovieList/MovieList';

class NominatedList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			storeImdbID: [],
			nomList: [],
		};
	}

	componentDidMount() {
		// grabs data from firebase
		const dbRef = firebase.database().ref();
		dbRef.on('value', (result) => {
			const data = result.val();
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
	};

	render() {
		return (
			<Card
				list={this.state.nomList}
				onButtonClick={this.removeNominationHandler}
				nomList={this.state.nomList}
				storeImdbID={this.state.storeImdbID}
				buttonText="Remove"
				disabled={this.state.nomList.disabled}
			/>
		);
	}
}

export default NominatedList;
