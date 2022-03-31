import React, { useContext } from "react";
import ContextContent from "./ContextContent";
import "./App.css";
import { ThemeContext } from "./ThemeContext";

const App6 = () => {
  const context = useContext(ThemeContext);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <ContextContent />
    </div>
  );
};

export default App6;
