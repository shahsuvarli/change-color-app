import { Component } from "react";
import "./App.css";
import Box from "./Box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      boxArray: new Array(9).fill(),
    };
  }
  render() {
    return (
      <div className="App">
        <div className="main">
          <h2>Color App</h2>
          <div className="boxes">
            {this.state.boxArray.map((box, index) => {
              return <Box key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
