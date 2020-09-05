import React from 'react';
import classes from './NotFound.module.css';

const notFound = (props) => {
	return (
		<div className="wrapper">
			<h2 className={classes.NotFound}>Sorry this Page could not be found</h2>
		</div>
	);
};

export default notFound;
