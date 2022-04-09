import React, { Component } from "react";

class Home extends Component {
  componentWillUnmount() {
    console.log("the home page is removed from the dom ");
  }
  render() {
    return (
      <div>
        <h1>this is home page</h1>
      </div>
    );
  }
}

export default Home;
