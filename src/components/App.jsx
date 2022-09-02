import React, { Component } from "react";
import "./App.css";
import Navbar from "./navbar";
const animationSpeed = 3;
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
    let quantity = this.state.width / 48;

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
    let l = 0;
    for (var i = 0; i < barArray.length; i++) {
      for (var j = 0; j < barArray.length - i - 1; j++) {
        /* This uses setTimeout to create a delay between all the color and value assignemnts. So while the algorithm happens instantaneously
        the actual changes are set at an ever increasing timer delay so they happen one after the other */

        const barArray = document.getElementsByClassName("visualiserArray");
        l++;
        const bar1Style = barArray[j].style;
        const bar2Style = barArray[j + 1].style;
        /* Sets the color of the values being compared to blue */
        setTimeout(() => {
          bar1Style.backgroundColor = "blue";
          bar2Style.backgroundColor = "blue";
        }, l * animationSpeed);
        l++;
        /* swaps the values if the left one is larger than the right one*/
        setTimeout(() => {
          if (parseInt(bar1Style.height) > parseInt(bar2Style.height)) {
            const temp = bar1Style.height;
            bar1Style.height = bar2Style.height;
            bar2Style.height = temp;
          }
        }, l * animationSpeed);
        l++;
        /* sets the bars color back to ping */
        setTimeout(() => {
          bar1Style.backgroundColor = "pink";
          bar2Style.backgroundColor = "pink";
        }, l * animationSpeed);
      }
    }
  }
}
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export default App;
