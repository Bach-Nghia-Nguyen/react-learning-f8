import React, { memo } from "react";

const ChildContent = ({ onIncrease }) => {
  console.log("child re-render");

  return (
    <>
      <h2>HELLO ANH EM F1 </h2>
      <button onClick={onIncrease}>Click me!</button>
    </>
  );
};

export default memo(ChildContent);
