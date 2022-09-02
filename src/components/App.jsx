import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unsortedList: [],
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  createArray = () => {
    const unsortedList = [];
    let quantity = (this.state.width - 200) / 4;

    for (let i = 0; i < quantity; i++) {
      unsortedList.push(getRandom(5, this.state.height - 58));
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
  updateDimensions = () => {
    let w = window;
    let width = w.innerWidth;
    let height = w.innerHeight;

    this.setState({ width: width, height: height });
    console.log(this.state.width);
  };

  componentDidMount() {
    this.createArray();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    return <div className="visualiserContainer">{this.renderArray()}</div>;
  }
}
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export default App;
