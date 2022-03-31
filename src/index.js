import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { ThemeProvider } from "./ThemeContext";
// import App2 from "./App2";
// import App3 from "./App3";
// import App4 from "./App4";
// import App5 from "./App5";
// import App6 from "./App6";
// import { StoreProvider } from "./store";
// import App7 from "./App7";
// import App8 from "./App8";
// import App9 from "./App9";
// import App10 from "./App10";
import App11 from "./App11";

// Fake comments
// function emitComment(id) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: `Nội dung comment của lesson ${id}`,
//       })
//     );
//   }, 2000);
// }

// emitComment(1);
// emitComment(2);
// emitComment(3);

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
    {/* <StoreProvider> */}
    <BrowserRouter>
      <App11 />
    </BrowserRouter>
    {/* </StoreProvider> */}
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
