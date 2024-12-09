import React, { useState } from "react";
import requests from "../data/requests";
import "../styling/toggleswitch.css";

function ToggleSwitch(id) {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const getRequest = requests.filter((i) => i.id === id);

  console.log(getRequest);

  return (
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
      <span className="slider round"></span>
    </label>
  );
}

export default ToggleSwitch;
