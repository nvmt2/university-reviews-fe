import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteWrapper from "./Route";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <RouteWrapper />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
