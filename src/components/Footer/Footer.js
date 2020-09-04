import React from 'react';
import classes from './Footer.module.css'

const Footer = (props) => {
	return (
		<footer className = {classes.Footer}>
			<p>
				Made by <a href="https://www.dustinkelly.dev/">Dustin Kelly</a>{' '}
			</p>
		</footer>
	);
};

export default Footer;
