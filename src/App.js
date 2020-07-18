import React, { Component } from "react";
import "./styles.css";
import Navbar from "./pages/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
