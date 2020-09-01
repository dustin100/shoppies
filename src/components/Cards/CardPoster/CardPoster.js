import React from 'react';
import classes from './CardPoster.module.css';

const cardPoster = (props) => {
	return (
		<img className={classes.CardPoster} src={props.Poster} alt={props.Title} />
	);
};

export default cardPoster;
