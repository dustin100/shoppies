import React from 'react';
import CardPoster from '../CardPoster/CardPoster';
import CardTop from '../CardTop/CardTop';
import Button from '../../UI/Button/Button';
import classes from './Card.module.css';

const card = (props) => {
	return (
		<div className={classes.Card}>
			<CardTop Title={props.Title} Year={props.Year} />
			<CardPoster Title={props.Title} Poster={props.usePoster} />
			<div className={classes.ButtonGroup}>
				<Button
					theColor="Add"
					clicked={props.onNominate}
					disabled={props.disabled}
				>
					<i className="fas fa-plus"></i>
				</Button>
				<Button
					theColor="Minus"
					clicked={props.onRemove}
					disabled={!props.disabled}
				>
					<i className="fas fa-minus"></i>
				</Button>
			</div>
		</div>
	);
};

export default card;
