import React from 'react';
import classes from './HeadingTwo.module.css';

const headingTwo = ({ heading }) => {
	return <h2 className={classes.HeadingTwo}>{heading}</h2>;
};

export default headingTwo;
