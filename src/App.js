import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Project1 from "./components/pages/Project1";
import Project2 from "./components/pages/Project2";
import Project3 from "./components/pages/Project3";
import Project4 from "./components/pages/Project4";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route index element={<Home />} />
            <Route path = "/home" element={<Home />} />
            <Route path = "/crystal-set-radio" element={<Project1 />} />
            <Route path = "/digital-circuit-design" element={<Project2 />} />
            <Route path = "/cpu" element={<Project3 />} />
            <Route path = "/d&e" element={<Project4 />} />
            <Route path="*" element={<div>wack</div>}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
