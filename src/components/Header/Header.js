import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({ title, tagLine }) => {
	return (
		<header className={classes.Header}>
			<div className="wrapper">
				<nav>
					<Link to="/">
						<i class="fas fa-home"></i>
					</Link>
					<h1>{title}</h1>
					<Link to="/nominates">
						<i class="fas fa-shopping-bag"></i>
					</Link>
				</nav>
				<p>{tagLine}</p>
			</div>
		</header>
	);
};

export default Header;
