import React from 'react';
import DisplayBody from './DisplayBody';
import DisplayImage from './DisplayImage';

const Display = (props) => {
	return (
		<>
			<div className='displays' style={{ width: '18rem' }}>
				<DisplayImage icon={props.icon} />
				<DisplayBody condition={props.condition} time={props.time} />
			</div>
		</>
	);
};

export default Display;
