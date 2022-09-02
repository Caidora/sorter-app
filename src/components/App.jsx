import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { unsortedList: [] };
  }

  componentDidMount = () => {
    this.createArray();
  };

  createArray = () => {
    const unsortedList = [];
    let quantity = window.innerWidth / 5;

    for (let i = 0; i < quantity; i++) {
      unsortedList.push(getRandom(5, window.innerHeight));
    }
    this.setState({ unsortedList: unsortedList });
  };
  renderArray() {
    return this.state.unsortedList.map((number, idx) => (
      <div
        className="visualiserArray"
        key={idx}
        style={{ height: number }}
      ></div>
    ));
  }
  render() {
    return <div className="visualiserContainer">{this.renderArray()}</div>;
  }
}
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export default App;
