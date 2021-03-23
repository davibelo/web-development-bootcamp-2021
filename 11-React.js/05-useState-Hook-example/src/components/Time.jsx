import React, { useState } from "react";

function Time() {
  // creating a initial state
  const now = new Date().toLocaleTimeString();
  // using useState hook
  // [state to be updated, function that updates the state] = useState(initial state)
  const [time, setTime] = useState(now);

  // function to be assigned to the button
  function updateTime() {
    // creates a new state
    const newTime = new Date().toLocaleTimeString();
    // sets the state
    setTime(newTime);
  }

  // using setInterval to call the updateTime function periodically
  setInterval(updateTime, 7000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button className="timeButton" onClick={updateTime}>
        Get Time
      </button>
    </div>
  );
}
export default Time;
