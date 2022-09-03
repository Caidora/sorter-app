import React, { Component } from "react";

import "./App.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="container navbar navbar-light bg-light  ">
        <form className="center">
          <button
            onClick={this.props.resetButton}
            className="btn btn-outline-success"
            type="button"
          >
            Reset Array
          </button>
          <button
            onClick={this.props.bubbleButton}
            className="btn btn-outline-success"
            type="button"
          >
            BubbleSort
          </button>
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={this.props.insertionButton}
          >
            InsertionSort
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
