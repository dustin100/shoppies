import React from 'react';
import CardPoster from '../../Cards/CardPoster/CardPoster';
import Button from '../../UI/Button/Button';
import classes from './Card.module.css';

const card = (props) => {
	return (
		<div className={classes.Card} tabIndex="0">
			<CardPoster Title={props.Title} Poster={props.usePoster} />
			<div>
				<h2>
					Title: <span>{props.Title}</span>
				</h2>
				<h4>
					Release: <span>{props.Year}</span>
				</h4>

				<Button clicked={props.onRemove} disabled={props.disabled}>
					Remove
				</Button>
			</div>
		</div>
	);
};

export default card;
