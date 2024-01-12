import { useEffect } from "react";
import { getTimeUntil } from "../../utils/time";
import "./Timer.scss";

const timeLeft = getTimeUntil();

const Timer = () => {
  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let birthday = "Jan 12, 2024 22:30:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(() => {
        let now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(
          distance / day
        ).toString();
        document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        ).toString();
        document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        ).toString();
        document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ).toString();

        //do something later when date is reached
        if (distance < 0) {
          clearInterval(x);
        }
        //seconds
      }, 0);
  }, []);

  return (
    <div className="counter">
      <div className="container">
        <h1 id="headline">מילה אחת קרקו.</h1>
        <div id="countdown">
          <ul>
            <li>
              <span id="seconds"></span>שניות
            </li>
            <li>
              <span id="minutes"></span>דקות
            </li>
            <li>
              <span id="hours"></span>שעות
            </li>
            <li>
              <span id="days"></span>ימים
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timer;
