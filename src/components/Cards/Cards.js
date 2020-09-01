import React from 'react';
import Card from './SingleCard/Card';
import posterDefault from '../../assets/no-poster-available.jpg';
import classes from './Cards.module.css';

const cards = (props) => {
	return (
		<section className="wrapper">
			<div className={classes.Cards}>
				{props.list.map(({ Title, imdbID, Poster, Year, disabled }) => {
					// if poster is missing adds a default image
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
							clicked={() => props.onButtonClick(imdbID)}
							buttonText={props.buttonText}
						/>
					);
				})}
			</div>
		</section>
	);
};
export default cards;
