import { useState } from 'react';
import './App.css';
import TimezoneSelector from './components/TimezoneSelector';
// import ClockList from './components/ClockList';

function App() {
  const [timezones, setTimezones] = useState('Europe/Athens');
  
  const addTimezone = (timezone) => {
    setTimezones([...timezones, timezone]);
  }
  
  const removeTimezone = (timezone) => {
    setTimezones (timezones.filter((zone) => zone !== timezone));
  };
  
  return (
      <div className="app">
        <h2>World Clocks</h2>
        <TimezoneSelector addTimezone={addTimezone} />
        {/* <ClockList timezones={timezones} removeTimezone={removeTimezone} /> */}
      </div>
  );
}

export default App;