import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light justify-content-between">
        <form>
          <button class="btn btn-outline-success" type="button">
            Main button
          </button>
          <button class="btn btn-outline-success" type="button">
            Main button
          </button>
          <button class="btn btn-outline-success" type="button">
            Main button
          </button>
          <button class="btn btn-outline-success" type="button">
            Main button
          </button>
          <button class="btn btn-outline-success" type="button">
            Main button
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
