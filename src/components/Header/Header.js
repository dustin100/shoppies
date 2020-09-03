import React from 'react';
import classes from './Header.module.css';

const Header = ({ title, tagLine }) => {
	return (
		<header className={classes.Header}>
			<div className="wrapper">
				<h1>{title}</h1>
				<p>{tagLine}</p>
			</div>
		</header>
	);
};

export default Header;
