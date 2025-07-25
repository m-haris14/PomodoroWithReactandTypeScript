import { useState, useEffect } from "react";
import "./stopWatch.css";

interface stopWatch {
  countDown : number,
  isRunning: boolean,
  setIsRunning : (isRunning: boolean) => void
}

const StopWatch = ({ countDown, isRunning, setIsRunning } : stopWatch) => {
  const [time, setTime] = useState(countDown);
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    setTime(countDown);
    setIsComplete(false);
    setIsRunning(false);
  }, [countDown]);

  useEffect(() => {
    let intervalId:number | undefined;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time - 1), 10);
    }
    if (time === 0) {
      clearInterval(intervalId);
      setIsComplete(true);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  return (
    <>
      {isComplete ? (
        <p className="text-center fs-2">Task Completed</p>
      ) : (
        <div className="stopwatch-container d-flex flex-column">
          <p className="stopwatch-time m-0">
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </p>
          <p className="fs-5">{isRunning ? "Pause" : "Start"}</p>
        </div>
      )}
    </>
  );
};

export default StopWatch;
