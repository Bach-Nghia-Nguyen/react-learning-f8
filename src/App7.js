import React from "react";
import { useStore, actions } from "./store";

const App7 = () => {
  const [state, dispatch] = useStore();
  const { todoInput, todos } = state;

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(""));
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={todoInput}
          placeholder="Enter todo..."
          onChange={(e) => {
            dispatch(actions.setTodoInput(e.target.value));
          }}
        />
        <button type="submit">Add</button>
      </form>

      {todos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default App7;
