import React from 'react';

const errors = (props) => {
	return (
		<div className="wrapper">
			<h3>Sorry we couldn't find your search {props.search}  </h3>
			<p>Check your spelling or try a simpler search</p>
		</div>
	);
};

export default errors;