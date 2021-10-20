import React from 'react';
import './App.css';
import Display from './Weather/Display';
import conditionsData from './Weather/conditionsData';

const  App = () => {

  const displays = conditionsData.map(display=><Display condition={display.condition} icon={display.icon} time={display.time}/>)

	return (
		<div className='App'>
			<h1>My WeatherIcons App</h1>
			<section class='displays'>
        {displays}
			</section>
		</div>
	);
};

export default App;
