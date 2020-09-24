import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
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
