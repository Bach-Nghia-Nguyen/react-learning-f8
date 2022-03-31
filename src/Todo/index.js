import React, { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
import logger from "./logger";

const TodoApp = () => {
  const [state, dispatch] = useReducer(logger(reducer), initialState);
  const { job, jobs } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJob(job));
    dispatch(setJob(""));
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <h3>Todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo..."
          value={job}
          onChange={(e) => dispatch(setJob(e.target.value))}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {jobs.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(deleteJob(index))}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
