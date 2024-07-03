import React, { useEffect, useRef, useState } from "react";

function CountDown() {
  const counterRef = useRef(null);
  const [count, setCount] = useState(0);
  const [pauseStatus, setPauseStatus] = useState("pause");

  const handleStart = () => {
    counterRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  const handlePause = () => {
    if (pauseStatus === "pause") {
      clearInterval(counterRef.current);
      setPauseStatus("play");
    } else {
      handleStart();
      setPauseStatus("pause");
    }
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleStart}>start</button>
      <button onClick={handlePause}>{pauseStatus}</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default CountDown;
