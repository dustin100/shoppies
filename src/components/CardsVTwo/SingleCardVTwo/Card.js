import React from 'react';
import CardPoster from '../../Cards/CardPoster/CardPoster';
import Button from '../../UI/Button/Button';
import classes from './Card.module.css';

const card = (props) => {
	return (
		<div className={classes.Card} tabIndex="0">
			<CardPoster Title={props.Title} Poster={props.usePoster} />
			<div className={classes.CardInfo}>
				<div className="CardText">
					<h2>{props.Title}</h2>
					<h4>{props.Year}</h4>
				</div>
				<Button clicked={props.onRemove} disabled={props.disabled}>
					REMOVE FROM LIST
				</Button>
			</div>
		</div>
	);
};

export default card;
