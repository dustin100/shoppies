import React from 'react';
import classes from './Errors.module.css';

const errors = (props) => {
	return (
		<div className={classes.Errors}>
			<h3>
				Sorry we couldn't find your search <span>{props.word} </span>
			</h3>
			<p>Check your spelling or try a simpler search</p>
		</div>
	);
};

export default errors;
