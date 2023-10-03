import { useState, useEffect } from "react";

const Counter = () => {
  const [hour, setHour] = useState(1);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (hour === 0 && minute === 0 && second === 0) {
      clearInterval(intervalId); // Clear interval if countdown reaches zero
    }

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [hour, minute, second]);

  const timeSetter = () => {
    if (second < 59) {
      setSecond((prevSecond) => prevSecond - 1);
    } else if (minute > 0) {
      setMinute((prevMinute) => prevMinute - 1);
      setSecond(59);
    } else if (hour > 0) {
      setHour((prevHour) => prevHour - 1);
      setMinute(59);
      setSecond(59);
    }
  };

  const startHandler = () => {
    if (!intervalId) {
      // Only start if it's not already running
      const id = setInterval(timeSetter, 1000);
      setIntervalId(id);
    }
  };

  const stopHandler = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setMinute(0);
    }
  };

  const resetHandler = () => {
    stopHandler(); // Stop the countdown
    setHour(0);
    setMinute(59);
    setSecond(59);
  };

  return (
    <div>
      <p>
        <span>{hour} </span>:<span> {minute} </span>:<span> {second}</span>
      </p>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
