import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
	const allClasses = [classes.Button];

	if (props.theColor === 'Add') {
		allClasses.push(classes.Add);
	} else if (props.theColor === 'Minus') {
		allClasses.push(classes.Minus);
	}else if (props.theColor === 'Final') {
		allClasses.push(classes.Final);
	}else {
		allClasses.push(classes.DefaultColor);
	}

	return (
		<button
			className={allClasses.join(' ')}
			disabled={props.disabled}
			onClick={props.clicked}
		>
			{props.children}
		</button>
	);
};

export default button;
