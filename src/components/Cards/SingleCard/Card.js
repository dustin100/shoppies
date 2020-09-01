import React from 'react';
import CardPoster from '../CardPoster/CardPoster';
import posterDefault from '../../../assets/no-poster-available.jpg';
import Button from '../../UI/Button/Button';

const card = (props) => {
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
						<div className="card" tabIndex="0" key={imdbID}>
							<div className="cardTop">
								<h2>{Title}</h2>
							</div>
							<CardPoster Title={Title} Poster={usePoster} imdbID={imdbID} />
							<p className="releaseYear">{Year}</p>
							<Button
								disabled={disabled}
								clicked={() => props.onButtonClick(imdbID)}
							>
								{props.buttonText}
							</Button>
						</div>
					);
				})}
			</div>
		</main>
	);
};

export default card;
