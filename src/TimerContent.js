import React, { useEffect, useState } from "react";

const TimerContent = () => {
  const [countdown, setCountdown] = useState(120);

  // Count down using setInterval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Count down using setTimeout
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setCountdown(countdown - 1);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [countdown]);

  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
};

export default TimerContent;
