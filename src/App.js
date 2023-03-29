import React, {useState} from "react";
import { ClockDropDown } from "./clockdropdown/clockdropdown";
import { ClockTime } from "./clocks/clock";
import './App.css';

function App() {
  const [timezone, setTimezone] = useState(["IST"]);
  const [selected, setSelected] = useState();
  
  const handleClick = () => {
    let timeValue = [...timezone]
    timeValue.push(selected);
    setTimezone(timeValue);
  };

  const onChange =(value) => {
    setSelected(value);
  }

  return (
    <div className="container">
    <h1 className="heading">CLOCK</h1>
    <div className="button-list">
      <ClockDropDown className="dropdown" onChange={onChange} />
      <button className="clickButton" onClick={handleClick}>+Add</button>
      </div>
      {timezone.map((item)=>
      <ClockTime timezone={item} /> )}
      
    </div>
  );
}

export default App;
