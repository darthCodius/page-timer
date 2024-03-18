import React, { useState, useEffect } from "react";
export default function App() {
  const [time, setTime] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [alarmSet, setAlarmSet] = useState(false);

  const updateTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
    if (alarmSet && currentTime === alarmTime) {
      console.log("alarm ringing");
      window.open("https://google.com", "_blank");
      setAlarmSet(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSetAlarm = () => {
    console.log("alarm set");
    setAlarmSet(true);
    setAlarmTime(document.getElementById("alarminput").value);
    console.log(alarmTime);
  };

  return (
    <div>
      <h1>Current Time:{time} </h1>
      <input type="time" id="alarminput" />
      <button onClick={handleSetAlarm}>Set Alarm</button>
    </div>
  );
}
