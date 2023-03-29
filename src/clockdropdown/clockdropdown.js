import React  from "react";
import {timeZone} from '../clocks/timezone/timezone';
import './clockdropdown.css';

export function ClockDropDown(props) {
  const handleClick = (e) => {
   props.onChange(e.target.value);
  };

  return (
    <>
        <select onChange={handleClick} >
          {timeZone.map((item) => (
            <option>{item}</option>
          ))}
        </select>
    </>
  );
}
