import React from 'react';
import classes from './Instructions.module.css';


let attachedClasses = [classes.Instructions, 'wrapper'];
const instructions = (props) => {
	return (
		<div className={attachedClasses.join(' ')}>
			<h2>How it Works</h2>
			<ol>
				<li>1. Search for your favorite movies.</li>
				<li>2. Add movies to your nomination list. </li>
				<li>3. Check out your nomination list.</li>
				<li>4. Edit your selections.</li>
				<li>5.Once you have 5 nominees you’re done!</li>
			</ol>
		</div>
	);
};

export default instructions;
