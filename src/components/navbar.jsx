import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-between">
        <form>
          <button className="btn btn-outline-success" type="button">
            Bubble Sort
          </button>
          <button className="btn btn-outline-success" type="button">
            Main button
          </button>
          <button className="btn btn-outline-success" type="button">
            Main button
          </button>
          <button className="btn btn-outline-success" type="button">
            Main button
          </button>
          <button className="btn btn-outline-success" type="button">
            Main button
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
