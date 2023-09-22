import Clock from './Clock';

// eslint-disable-next-line
const ClockList = ( { timezones, removeTimezone } ) => {
	return (
		<div className="clockList">
			{timezones.map ((timezone) => (
			<Clock key={timezone} timezone={timezone} removeTimezone={removeTimezone}/>))}
		</div>
	);
}
export default ClockList;