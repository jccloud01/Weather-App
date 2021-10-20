import React from 'react';

const DisplayBody = (props) => {
	return (
		<div className='display-body'>
			<p className='display-condition'><span>Conditions:</span> {props.condition}</p>
			<p className='display-time'><span> Time:</span> {props.time}</p>
		</div>
	);
};

export default DisplayBody;
