import { useEffect } from "react";
import { getTimeUntil } from "../../utils/time";
import "./Timer.scss";

const timeLeft = getTimeUntil();

const Timer = () => {
  useEffect(() => {}, []);

  return (
    <div className="holder">
      <div className="new-year"></div>
    </div>
  );
};

export default Timer;
