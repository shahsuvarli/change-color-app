import { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    this.setState({
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    });
  }
  render() {
    return (
      <div
        className="box"
        style={{
          backgroundColor: `rgb(${this.state.r},${this.state.g},${this.state.b})`,
        }}
        onClick={this.changeColor}
      ></div>
    );
  }
}
export default Box;
