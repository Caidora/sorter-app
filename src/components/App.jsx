import React, { Component } from "react";
import "./App.css";
import Navbar from "./navbar";
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
      unsortedList.push(getRandom(5, this.state.height - 100));
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
    window.addEventListener("resize", this.createArray);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("resize", this.createArray);
  }
  render() {
    return (
      <React.Fragment>
        <Navbar
          resetButton={this.createArray}
          bubbleButton={() => this.BubbleSort()}
        ></Navbar>
        <div className="visualiserContainer">{this.renderArray()}</div>
      </React.Fragment>
    );
  }
  BubbleSort() {
    let barArray = document.getElementsByClassName("visualiserArray");
    console.log(barArray[100].style.height);
    for (var i = 0; i < barArray.length; i++) {
      for (var j = 0; j < barArray.length - i - 1; j++) {
        const jval = parseInt(barArray[j].style.height);
        const j2val = parseInt(barArray[j + 1].style.height);
        setTimeout(() => {
          barArray[j].style.backgroundColor = "blue";
          barArray[j + 1].style.backgroundColor = "blue";
        }, i * 3);
        if (jval > j2val) {
          var temp = jval + "px";
          barArray[j].style.height = j2val + "px";
          barArray[j + 1].style.height = temp;
        }

        setTimeout(() => {
          barArray[j].style.backgroundColor = "pink";
          barArray[j + 1].style.backgroundColor = "pink";
        }, i * 3);
      }
    }
  }
}
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export default App;
