import React, { Component } from "react";
import "./App.css";
import Navbar from "./navbar";
const animationSpeed = 3;
const startColor = "rgb(137, 207, 240)";
const comparisonColor = "darkBlue";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unsortedList: [],
      width: window.innerWidth,
      height: window.innerHeight,
      barMargin: 0,
      barWidth: 0,
      startHeight: 0,
    };
  }

  createArray = () => {
    const unsortedList = [];
    let quantity = 25;
    let barWidth = (this.state.width - 200) / quantity;
    barWidth = barWidth - 2;
    let barMargin = "0 1px";
    for (let i = 0; i < quantity; i++) {
      unsortedList.push(getRandom(5, this.state.height - 100));
    }
    this.setState({
      unsortedList: unsortedList,
      barWidth: barWidth,
      barMargin: barMargin,
      startHeight: this.state.height,
    });
    console.log(this.state.barWidth);
  };
  renderArray() {
    return this.state.unsortedList.map((number, idx) => (
      <div
        className="visualiserArray"
        key={idx}
        style={{
          height: this.state.unsortedList[idx],
          width: this.state.barWidth,
          margin: this.state.barMargin,
          backgroundColor: startColor,
        }}
      ></div>
    ));
  }
  updateDimensions = () => {
    let w = window;
    let width = w.innerWidth;
    let startHeight = this.state.height;
    let height = w.innerHeight;
    const UnsortedList = this.state.unsortedList;
    let barMargin = "0 1px";
    let quantity = 25;
    let barWidth = (this.state.width - 200) / quantity;
    barWidth = barWidth - 2;
    for (let i = 0; i < UnsortedList.length; i++) {
      UnsortedList[i] =
        UnsortedList[i] * (this.state.height / this.state.startHeight);
      console.log(this.state.height / this.state.startHeight);
    }

    this.setState({
      width: width,
      height: height,
      barWidth: barWidth,
      barMargin: barMargin,

      startHeight: startHeight,
      unsortedList: UnsortedList,
    });
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
        /* Sets the color of the values being compared to the comparisonColor */
        setTimeout(() => {
          bar1Style.backgroundColor = comparisonColor;
          bar2Style.backgroundColor = comparisonColor;
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
        /* sets the bars color back to startColor */
        setTimeout(() => {
          bar1Style.backgroundColor = startColor;
          bar2Style.backgroundColor = startColor;
        }, l * animationSpeed);
      }
    }
  }
}
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export default App;
