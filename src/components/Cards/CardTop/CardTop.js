import React from 'react';

const cardTop = (props) => {
	return (
		<div className="cardTop">
			<h2>{props.Title}</h2>
			<p className="releaseYear">{props.Year}</p>
		</div>
	);
};

export default cardTop;
