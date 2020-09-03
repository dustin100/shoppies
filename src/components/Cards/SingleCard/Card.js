import React from 'react';
import CardPoster from '../CardPoster/CardPoster';
import CardTop from '../CardTop/CardTop';
import Button from '../../UI/Button/Button';
import classes from './Card.module.css';

const card = (props) => {
	return (
		<div className={classes.Card} tabIndex="0">
			<CardTop Title={props.Title} Year={props.Year} />
			<CardPoster Title={props.Title} Poster={props.usePoster} />
			<Button clicked={props.onNominate} disabled={props.disabled}>
				Add
			</Button>
			<Button clicked={props.onRemove} disabled={!props.disabled}>
				Remove
			</Button>
		</div>
	);
};

export default card;
