import React from 'react';
import classes from './Instructions.module.css';
import HeadingTwo from '../HeadingTwo/HeadingTwo'

let attachedClasses = [classes.Instructions, 'wrapper'];
const instructions = (props) => {
	return (
		<div className={attachedClasses.join(' ')}>
			<HeadingTwo heading = "How it Works"/>
			<ol>
				<li>1. Search for your favorite movies.</li>
				<li>2. Add movies to your nomination list. </li>
				<li>3. Check out your nomination list.</li>
				<li>4. Edit your selections.</li>
				<li>5. Once you have 5 nominees you’re done!</li>
			</ol>
		</div>
	);
};

export default instructions;
