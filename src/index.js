import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Navbar></Navbar>
    <App />
  </React.Fragment>
);
