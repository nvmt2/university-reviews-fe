import { createStore } from 'redux';
import { appReducer } from './ducks/rootReducer';
import { ENVIRONMENT } from 'query/config';

function configureStore(initialState = {}) {
  if (ENVIRONMENT === 'dev') {
    return createStore(
      appReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  return createStore(appReducer, initialState);
}

const initialState = window.initialReduxState;
export const store = configureStore(initialState);
