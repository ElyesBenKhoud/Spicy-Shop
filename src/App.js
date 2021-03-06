import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
