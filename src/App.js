import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import { BrowserRouter as Router } from "react-router-dom";
import RouteWrapper from "./Route";
import "bootstrap/dist/css/bootstrap.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { API_CMS } from "./query/config" ;


const client = new ApolloClient({
  uri: API_CMS,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
     <ApolloProvider client={client}>
      <Router>
        <RouteWrapper />
      </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
