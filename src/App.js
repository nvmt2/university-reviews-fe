import React from "react";
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
