import React, { useReducer } from "react";

const initialState = 0;

const UP_ACTION = "UP";
const DOWN_ACTION = "DOWN";
const RESET_ACTION = "RESET";

const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case UP_ACTION:
      return state + 1;

    case DOWN_ACTION:
      return state - 1;

    case RESET_ACTION:
      return 0;

    default:
      throw new Error("Invalid action");
  }
};

const App4 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "0 20px" }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: DOWN_ACTION })}>Down</button>
      <button onClick={() => dispatch({ type: UP_ACTION })}>Up</button>
      <button onClick={() => dispatch({ type: RESET_ACTION })}>Reset</button>
    </div>
  );
};

export default App4;
