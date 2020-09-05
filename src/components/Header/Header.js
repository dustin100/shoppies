import React, { Fragment } from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({ title, tagLine }) => {
	return (
		<Fragment>
			<header className={classes.Header}>
				<div className="wrapper">
					<nav>
						<Link to="/">
							<i className="fas fa-home"></i>
						</Link>
						<h1>{title}</h1>
						<Link to="/nominates">
							<i className="fas fa-shopping-bag"></i>
						</Link>
					</nav>
				</div>
			</header>
			<p className={classes.TagLine}>{tagLine}</p>
		</Fragment>
	);
};

export default Header;
