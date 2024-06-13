import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App/App";
import Website from "./Website/index.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <Website />
  </React.StrictMode>
);
