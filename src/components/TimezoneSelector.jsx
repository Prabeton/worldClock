import { useState } from 'react';
import './TimezoneSelector.css';

// eslint-disable-next-line
const TimezoneSelector = ( { addTimezone } ) => {
	
	const [selectedTimezone, setSelectedTimezone] = useState('Europe/Athens');
	
	const timezoneOptions = [
		{ fullName: "Etc/GMT+12", abbreviation: "UTC-12" },
		{ fullName: "Pacific/Midway", abbreviation: "UTC-11" },
		{ fullName: "Pacific/Honolulu", abbreviation: "UTC-10" },
		{ fullName: "America/Adak", abbreviation: "UTC-9" },
		{ fullName: "America/Los_Angeles", abbreviation: "UTC-8" },
		{ fullName: "America/Denver", abbreviation: "UTC-7" },
		{ fullName: "America/Chicago", abbreviation: "UTC-6" },
		{ fullName: "America/New_York", abbreviation: "UTC-5" },
		{ fullName: "America/Caracas", abbreviation: "UTC-4" },
		{ fullName: "America/Buenos_Aires", abbreviation: "UTC-3" },
		{ fullName: "Etc/GMT+2", abbreviation: "UTC-2" },
		{ fullName: "Etc/GMT+1", abbreviation: "UTC-1" },
		{ fullName: "Etc/GMT", abbreviation: "UTC" },
		{ fullName: "Europe/Paris", abbreviation: "UTC+1" },
		{ fullName: "Europe/Athens", abbreviation: "UTC+2" },
		{ fullName: "Europe/Moscow", abbreviation: "UTC+3" },
		{ fullName: "Asia/Dubai", abbreviation: "UTC+4" },
		{ fullName: "Asia/Karachi", abbreviation: "UTC+5" },
		{ fullName: "Asia/Dhaka", abbreviation: "UTC+6" },
		{ fullName: "Asia/Bangkok", abbreviation: "UTC+7" },
		{ fullName: "Asia/Hong_Kong", abbreviation: "UTC+8" },
		{ fullName: "Asia/Tokyo", abbreviation: "UTC+9" },
		{ fullName: "Pacific/Guam", abbreviation: "UTC+10" },
		{ fullName: "Pacific/Efate", abbreviation: "UTC+11" },
		{ fullName: "Pacific/Fiji", abbreviation: "UTC+12" },
	];
	
	const handleChange = (event) => {
		setSelectedTimezone(event.target.value);
	};
	const handleAddTimezone = () => {
		addTimezone(selectedTimezone);
	};
	
	return (
		<div className="timezoneSelector">
			<select value={selectedTimezone} onChange={handleChange}>
				{timezoneOptions.map((option) => (
					<option key={option.fullName} value={option.fullName}>
						{option.fullName}   ({option.abbreviation})
					</option>
				))}
			</select>
			<button className="addTimezone" onClick={handleAddTimezone}>Add Timezone</button>
		</div>
	);
	
}

export default TimezoneSelector;