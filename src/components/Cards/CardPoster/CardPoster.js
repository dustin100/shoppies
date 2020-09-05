import React from 'react';
import classes from './CardPoster.module.css';

const cardPoster = ({Poster, Title}) => {
	return (
		<img className={classes.CardPoster} src={Poster} alt={Title} />
	);
};

export default cardPoster;
