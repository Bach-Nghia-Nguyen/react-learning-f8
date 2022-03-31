import React, { useRef, useState, useEffect } from "react";
// import FakeChatContent from "./FakeChatContent";
// import LayoutEffectContent from "./LayoutEffectContent";
// import AvatarContent from "./AvatarContent";
// import TimerContent from "./TimerContent";

function App() {
  // const [display, setDisplay] = useState(false);
  const [count, setCount] = useState(60);
  const timerId = useRef();
  const prevCount = useRef();

  useEffect(() => {
    // Lay value truoc do cua count
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    console.log("Start", timerId);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("Stop", timerId);
  };

  console.log("current count", count);
  console.log("previous count", prevCount.current);

  return (
    <div style={{ padding: "20px" }}>
      {/* <button onClick={() => setDisplay((prev) => !prev)}>Toggle</button>
      {display && <LayoutEffectContent />} */}
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
