import React from 'react';
import classes from './CardTop.module.css';

const cardTop = (props) => {
	return (
		<div className={classes.CardTop}>
			<h2>{props.Title}</h2>
			<p className="releaseYear">{props.Year}</p>
		</div>
	);
};

export default cardTop;
