import React, { useState } from "react";
import "../styling/toggleswitch.css";

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
      <span className="slider round"></span>
    </label>
  );
}

export default ToggleSwitch;
