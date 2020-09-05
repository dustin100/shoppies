import React from 'react';
import classes from './Banner.module.css'

const banner = (props) => {
	return (
		<div className = {classes.Banner}>
			<h2>Congratulations!</h2>
			<p>You've Picked Your Top 5 Movies</p>
			<p>To edit or submit your selection click on the shopping bag</p>
		</div>
	);
};

export default banner;
