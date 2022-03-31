import React from "react";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import GlobalStyles from "./components/GlobalStyles";
// import "./App.css";

const App9 = () => {
  return (
    <GlobalStyles>
      <div style={{ padding: "0 32px" }}>
        <Heading />
        <Paragraph />
      </div>
      <div className="d-flex">
        <div>Content 1</div>
        <div>Content 2</div>
      </div>
    </GlobalStyles>
  );
};

export default App9;
