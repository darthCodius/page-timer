import React, { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [alarmSet, setAlarmSet] = useState(false);

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const updateTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
    if (alarmSet && currentTime === alarmTime) {
      console.log("alarm ringing");
      window.open("https://google.com", "_blank");
      setAlarmSet(false);
    }
  };

  const handleSetAlarm = () => {
    console.log("alarm set");
    setAlarmSet(true);
    console.log(alarmTime);
  };

  return (
    <div>
      <h1>Current Time:{time} </h1>
      <input
        type="time"
        id="alarminput"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
      />
      <button onClick={handleSetAlarm}>Set Alarm</button>
    </div>
  );
}
