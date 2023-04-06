import React, {useState} from "react";
import { ClockDropDown } from "./clockdropdown/clockdropdown";
import { ClockTime } from "./clocks/clock";
import './App.css';

function App() {
  const [timezone, setTimezone] = useState(["Asia/Kolkata"]);
  const [selected, setSelected] = useState();
  
  const handleClick = () => {
    let timeValue = [...timezone];
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
      {selected? (<button className="clickButton" onClick={handleClick}>+Add</button>) : 
      (<button className="clickButton">+Add</button>)}
      </div>
      <div>
      { timezone.map((item, index)=>
      <ClockTime className="clock-box" timezoneName={item} index={index} timezone={timezone} setTimezone={setTimezone} /> )}
      </div>
    </div>
  );
}


export default App;
