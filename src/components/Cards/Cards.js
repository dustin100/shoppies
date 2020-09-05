import React from 'react';
import Card from './SingleCard/Card';
import posterDefault from '../../assets/no-poster-available.jpg';
import classes from './Cards.module.css';

const cards = (props) => {
	return (
		<section className="wrapper">
			<div className={classes.Cards}>
				{props.list.map(({ Title, imdbID, Poster, Year, disabled }) => {
					// adds a default image if poster is missing
					let usePoster = Poster;
					if (Poster === `N/A`) {
						usePoster = posterDefault;
					}

					return (
						<Card
							key={imdbID}
							Title={Title}
							usePoster={usePoster}
							Year={Year}
							disabled={disabled}
							onNominate={() => props.onNominate(imdbID)}
							onRemove={() => props.onRemove(imdbID)}
							clicked={() => props.onButtonClick(imdbID)}
							
						/>
					);
				})}
			</div>
		</section>
	);
};
export default cards;
