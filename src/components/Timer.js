import React, { useEffect } from "react";

const Timer = () => {
  const [hours, setHours] = React.useState(0);
  const [mins, setMins] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const intervalRef = React.useRef(null);

  const callTimer = () => {
    if (isActive && !isPaused) return;
    setIsActive(true);
    setIsPaused(false);

    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds + 1 === 60) {
          setSeconds(0);
          setMins((prevMins) => {
            if (prevMins + 1 === 60) {
              setMins(0);
              setHours((prevHours) => prevHours + 1);
              // return 0;
            }
            return prevMins + 1;
          });
          // return 0;
        }
        return prevSeconds + 1;
      });
    }, 1000);
  };
  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsPaused(true);
  };
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPaused(false);
    setHours(0);
    setMins(0);
    setSeconds(0);
  };
  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  return (
    <div>
      Timer Page
      <div className=" flex justify-center   items-center min-h-screen   bg-gray-100">
        <div className=" ">
          <h1>Timer</h1>
          <div>{isPaused ? "Paused" : "Running"}</div>
          <h2>
            {" "}
            {String(hours)}:{String(mins)}:{String(seconds)}
          </h2>
          <button
            className="bg-sky-500 px-2 mr-2 border-2 rounded-md text-white"
            type="button"
            onClick={callTimer}
          >
            {" "}
            Start
          </button>

          <button
            type="button"
            className="bg-sky-500 px-2 mr-2 border-2 rounded-md text-white"
            onClick={() => {
              pauseTimer();
            }}
          >
            Stop
          </button>
          <button
            type="button"
            className="bg-red-500 px-2 mr-2 border-2 rounded-md text-white"
            onClick={() => {
              resetTimer();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
