import React, { Fragment } from 'react';
import Card from './SingleCard/Card';
import Button from '../UI/Button/Button';
import posterDefault from '../../assets/no-poster-available.jpg';

const cards = (props) => {
	return (
		<main className=" wrapper">
			<div className="cardWrapper">
				{props.list.map(({ Title, imdbID, Poster, Year, disabled }) => {
					// if poster is missing adds a default image
					let usePoster = Poster;
					if (Poster === `N/A`) {
						usePoster = posterDefault;
					}

					return (
						<Fragment>
							<Card
								key={imdbID}
								Title={Title}
								usePoster={usePoster}
								Year={Year}
								disabled={disabled}
							/>
							<Button
								disabled={disabled}
								clicked={() => props.onButtonClick(imdbID)}
							>
								{props.buttonText}
							</Button>
						</Fragment>
					);
				})}
			</div>
		</main>
	);
};
export default cards;
