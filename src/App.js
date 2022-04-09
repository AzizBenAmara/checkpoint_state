import React, { Component } from "react";
import Home from "./Home";
import ImgSrc from "./avatar.jpg";
import './App.css';

export default class componentName extends Component {
  state = { fullname: "Aziz Ben Amara", image: ImgSrc, show: false, count: 0 };
  
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };

  /*  componentDidMount() {
    alert(`welcome ${this.state.fullname}`);
  }
  componentDidUpdate() {
    alert("your component and i mean by that the state is updated");
  } */

  handleShow = () => {
    if (this.state.show) {
      this.setState({ show: false });
    } else {
      setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
      this.setState({ count: 0 });
      this.setState({ show: true });
    }
  };

  render() {
    return (
      <div className="div1">
        {/* <button onClick={this.handleIncrement}>increment</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleDecrement}>decrement</button> */}
        {this.state.show && (
          <div className="div2">
            <h1>{this.state.fullname}</h1>
            <img className="image" src={this.state.image} />
            <h1 className="count">{this.state.count}</h1>

            {/* {this.state.show && <Home />} */}
          </div>
        )}
        <button className="button1" onClick={this.handleShow}>SHOW</button>
      </div>
    );
  }
}
