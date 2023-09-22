import { useState, useEffect } from 'react';
import './Clock.css';

// eslint-disable-next-line
const Clock = (  { timezone, removeTimezone } ) => {
	const [currentTime, setCurrentTime] = useState(new Date());
	
	useEffect (() => {
		const intervalId = setInterval(() => {
			setCurrentTime (new Date());
		},1000);
		
		return () => {
			clearInterval(intervalId);
		};
	},[]);
	
	const formattedTime = currentTime.toLocaleString('en-US', {
		timeZone: timezone,
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	});

	return (
		<div className="clock">
			<h2>Timezone: {timezone}</h2>
			<p>{formattedTime}</p>
			<button className="remove" onClick={() => removeTimezone(timezone)}>
				Remove
			</button>
		</div>
	);
}
export default Clock;