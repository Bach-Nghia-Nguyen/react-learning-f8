import React, {
  // useEffect,
  useLayoutEffect,
  useState,
} from "react";

const LayoutEffectContent = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  const handleRun = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  );
};

export default LayoutEffectContent;
