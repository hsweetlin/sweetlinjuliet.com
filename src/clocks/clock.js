import React, { useState, useEffect } from "react";
import "./clock.css";
import { FaTimesCircle } from "react-icons/fa";

export function ClockTime({ timezoneName, timezone, setTimezone, index}) {
  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  // const [icon, setIcon] = useState([]);
  // const [active, setActive] = useState();
  useEffect(() => {
    const interval = setInterval(setClock, 100);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  const setClock = () => {
    const today = new Date(
      new Date().toLocaleString("en-US", { timeZone: timezoneName })
    );
    setHours(today.getHours());
    setMinutes(today.getMinutes());
    setSeconds(today.getSeconds());
  };
  const deleteButton = () => {
    // var result = timezone.concat([]);
    var result = [...timezone];
  var report=result.splice(index, 1);
  console.log(index);
  setTimezone(result);
  console.log(report);
  console.log(result);
  }
  
  return (
    
    <div className="icon-background">
    <div className="page">
     
        <FaTimesCircle className="icon" color="red" onClick={deleteButton}/>
        <h1 className="timezone-heading">{timezoneName}</h1>
        {/* {console.log(active)} */}
        <div id="round">
          <div id="circle"></div>
          <div
            id="hoursHand"
            style={{ transform: `rotate(${(hours / 12) * 360}deg)` }}
          ></div>
          <div
            id="minutesHand"
            style={{ transform: `rotate(${(minutes / 60) * 360}deg)` }}
          ></div>
          <div
            id="seconds"
            style={{ transform: `rotate(${(seconds / 60) * 360}deg)` }}
          ></div>

          <div class="time line1" id="clock1">
            1
          </div>
          <div class="time line2">2</div>
          <div class="time line3" id="clock3">
            3
          </div>
          <div class="time line4">4</div>
          <div class="time line5">5</div>
          <div class="time line6" id="clock6">
            6
          </div>
          <div class="time line7">7</div>
          <div class="time line8">8</div>
          <div class="time line9" id="clock9">
            9
          </div>
          <div class="time line10">10</div>
          <div class="time line11">11</div>
          <div class="time line12" id="clock12">
            12
          </div>
        </div>
      </div>
    </div>
  );
}
