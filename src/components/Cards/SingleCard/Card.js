import React from 'react';
import CardPoster from '../CardPoster/CardPoster';
import CardTop from '../CardTop/CardTop';

const card = (props) => {
	return (
		<div className="card" tabIndex="0">
			<CardTop Title={props.Title} Year={props.Year} />
			<CardPoster Title={props.Title} Poster={props.usePoster} />
		</div>
	);
};

export default card;
