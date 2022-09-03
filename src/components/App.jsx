import React, { Component } from "react";
import "./App.css";
import Navbar from "./navbar";
const animationSpeed = 4;
const startColor = "rgb(137, 207, 240)";
const comparisonColor = "darkBlue";
const quantity = 50;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unsortedList: [],
      width: window.innerWidth,
      height: window.innerHeight - 10,
      barMargin: 0,
      barWidth: 0,
      startHeight: 0,
    };
  }

  createArray = () => {
    const unsortedList = [];
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
    let height = w.innerHeight - 10;
    const UnsortedList = this.state.unsortedList;
    let barMargin = "0 1px";
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
          insertionButton={() => this.insertionSort()}
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
        setTimeout(
          swapColor,
          l * animationSpeed,
          bar1Style,
          bar2Style,
          comparisonColor
        );
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
        setTimeout(
          swapColor,
          l * animationSpeed,
          bar1Style,
          bar2Style,
          startColor
        );
      }
    }
  }
  insertionSort() {
    let barArray = document.getElementsByClassName("visualiserArray");
    let l = 1;
    const questionStartTimers = [];
    for (let i = 1; i < barArray.length; i++) {
      questionStartTimers[i] = [];
      for (let j = i; j > 0; j--) {
        const barArray1 = barArray[j].style;
        const barArray2 = barArray[j - 1].style;
        l++;
        questionStartTimers[i][l] = setTimeout(
          swapColor,
          l * animationSpeed,
          barArray1,
          barArray2,
          comparisonColor
        );
        l++;
        /* performs swap, cancels future settimers if the insertion sort inserts the value
         */
        questionStartTimers[i][l] = setTimeout(() => {
          if (parseInt(barArray1.height) < parseInt(barArray2.height)) {
            const temp = barArray1.height;
            barArray1.height = barArray2.height;
            barArray2.height = temp;
          } else {
            swapColor(barArray1, barArray2, startColor);
            questionStartTimers[i].forEach((timer) => clearTimeout(timer));
          }
        }, l * animationSpeed);
        l++;
        questionStartTimers[i][l] = setTimeout(
          swapColor,
          l * animationSpeed,
          barArray1,
          barArray2,
          startColor
        );
      }
    }
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function swapColor(bar1Style, bar2Style, Color) {
  bar1Style.backgroundColor = Color;
  bar2Style.backgroundColor = Color;
}
export default App;
