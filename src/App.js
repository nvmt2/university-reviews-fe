import React from 'react';
import { Provider } from 'react-redux';
// react-redux
import { store } from 'state/index';
// react-router
import { BrowserRouter as Router } from 'react-router-dom';
import RouteWrapper from 'route/Route';
// graphQL
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { API_CMS } from 'query/config';
// font awesome
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import 'bootstrap/dist/css/bootstrap.css';
// internal style
import 'App.css';

// Configuration graphQL
const client = new ApolloClient({
  uri: API_CMS,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <RouteWrapper />
          </Router>
        </Provider>
      </ApolloProvider>
    </div>
  );
}

export default App;
