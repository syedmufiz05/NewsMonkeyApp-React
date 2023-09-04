import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/"element={<News  key="general" category="general" country="in" pageSize={9}/>} />
            <Route exact path="/business"element={<News key="business" category="business" country="in" pageSize={9}/>} />
            <Route exact path="/entertainment"element={<News key="entertainment" category="entertainment" country="in" pageSize={9}/>} />
            <Route exact path="/health"element={<News  key="health"category="health" country="in" pageSize={9}/>} />
            <Route exact path="/science"element={<News key="science" category="science" country="in" pageSize={9}/>} />
            <Route exact path="/sports"element={<News key="sports" category="sports" country="in" pageSize={9}/>} />
            <Route exact path="/technology"element={<News key="technology" category="technology" country="in" pageSize={9}/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}
