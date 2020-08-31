import React from 'react';

const cardPoster = (props) => {
	return (
		<div>
			<img src={props.Poster} alt={props.Title} />;
		</div>
	);
};

export default cardPoster;
