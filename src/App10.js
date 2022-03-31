import React from "react";
import Button from "./components/Button";
import GlobalStyles from "./components/GlobalStyles";

function App10() {
  return (
    <GlobalStyles>
      <div style={{ padding: "10px 32px" }}>
        <Button primary />
        <Button />
        <Button primary disabled />
      </div>
    </GlobalStyles>
  );
}

export default App10;
