import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Navbar>
      <form class="form-inline">
        <button class="btn btn-outline-success" type="button">
          Main button
        </button>
        <button class="btn btn-sm btn-outline-secondary" type="button">
          Smaller button
        </button>
      </form>
    </Navbar>
    <App />
  </React.Fragment>
);
