import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
 

class Parent extends Component {
  nav() {
    window.location.replace("/parent");
  }
  render() {
    return (
      <div className="App">
        Parent
      </div>

    );
  }
}

export default Parent;