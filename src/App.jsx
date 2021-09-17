// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Box from "./components/Box";

class App extends Component {
  constructor(props) {
    super(props);

    // set default state

    const boxes = [];
    let numBoxes = 24;
    for (let i = 0; i < numBoxes; i++) {
      boxes.push({
        id: i,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
      });
    }
    this.state = { boxes };

    // bind methods to this
    this.handleBoxClick = this.handleBoxClick.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
  }

  handleBoxClick(e) {
    const newBoxes = this.state.boxes.map((box) => {
      if (box.id === e.target.id) {
        box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`;
      }
      return box;
    });
    this.setState({ boxes: newBoxes });
  }

  getRandomColor() {
    const rgb = Math.round(Math.random() * 255);
    return rgb;
  }

  render() {
    const renderBoxes = this.state.boxes.map((box) => {
      return (
        <box
        key={ box.id }
        id={ box.id }
        color={ box.color }
        handleClick={ this.handleBoxClick }
      />
      )
    });
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">
          { renderBoxes }
        </div>
      </main>
    );
  }
}

export default App;
