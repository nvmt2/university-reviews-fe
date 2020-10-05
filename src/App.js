import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import { BrowserRouter as Router } from "react-router-dom";
import RouteWrapper from "./Route";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <RouteWrapper />
      </Router>
    </div>
  );
}

export default App;
