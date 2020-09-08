import React, { Component, Fragment } from 'react';
import Cards from '../../components/CardsVTwo/CardsVTwo';
import classes from './NominatedList.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import HeadingTwo from '../../components/HeadingTwo/HeadingTwo';
import firebase from '../../firebase';
import Button from '../../components/UI/Button/Button';

class NominatedList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			storeImdbID: [],
			nomList: [],
			loading: true,
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
				loading: false,
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

	// Ideally this would be submitted as a form to a server somewhere
	submitFinalList = () => {
		alert('Thanks for your Nominations');
	};

	render() {
		const reachedFive = this.state.nomList.length === 5;
		let cards = this.state.loading ? (
			<Spinner />
		) : (
			<p className={classes.NominatedList}>
				Start by searching for a movie to nominate
			</p>
		);
		if (this.state.nomList.length > 0) {
			cards = (
				<Cards
					list={this.state.nomList}
					onRemove={this.removeNominationHandler}
					nomList={this.state.nomList}
					storeImdbID={this.state.storeImdbID}
					buttonText="Remove"
					disabled={false}
				/>
			);
		}

		return (
			<Fragment>
				<HeadingTwo heading="Your Nominations" />
				{cards}
				<div className= {classes.Final}>
					<Button
						theColor="Final"
						clicked={this.submitFinalList}
						disabled={!reachedFive}
					>
						Submit
					</Button>
				</div>
			</Fragment>
		);
	}
}

export default NominatedList;
