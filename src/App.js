import React from 'react';
import { Provider } from 'react-redux';
// react-redux
import { store } from 'state/index';
// react-router
import RouteWrapper from 'route/RouterWrapper';
// graphQL
import { ApolloProvider, fromPromise } from '@apollo/client';
import { apolloClient } from 'apollo/config';
// font awesome
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import 'bootstrap/dist/css/bootstrap.css';
// multiple lingual i18next
import { I18nextProvider } from 'react-i18next';
import i18n from 'locales/i18n/config';
// internal style
import 'App.css';
// dark and brighten theme
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'theme/useDarkMode';
import { darkTheme, lightTheme } from 'theme/theme';

function App() {
  const [theme, setTheme] = useDarkMode();
  return (
    <div>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <I18nextProvider i18n={i18n}>
          <ApolloProvider client={apolloClient}>
            <Provider store={store}>
              <RouteWrapper changeTheme={setTheme} />
            </Provider>
          </ApolloProvider>
        </I18nextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
