import React, { useCallback, useState } from "react";
import ChildContent from "./ChildContent";

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

const App2 = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const increase2 = () => {
    setCount2((prev) => prev + 1);
  };
  return (
    <div style={{ padding: "10px 32px" }}>
      <ChildContent onIncrease={handleIncrease} />
      <h1>{count}</h1>
      <h1>{count2}</h1>

      <button onClick={increase2}>Click me 2!</button>
    </div>
  );
};

export default App2;
