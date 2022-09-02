import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-between">
        <form>
          <button
            onClick={this.props.resetButton}
            className="btn btn-outline-success"
            type="button"
          >
            Reset Array
          </button>
          <button className="btn btn-outline-success" type="button">
            BubbleSort
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
