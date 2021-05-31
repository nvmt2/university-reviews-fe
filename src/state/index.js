import { createStore } from 'redux';
import { appReducer } from './ducks/rootReducer';
import { ENVIRONMENT } from 'apollo/constance';
//redux persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// library for connect Vscode store redux with google Chorme
import { composeWithDevTools } from 'redux-devtools-extension';

// function configureStore(initialState = {}) {
//   if (ENVIRONMENT === 'dev') {
//     return createStore(
//       appReducer,
//       initialState,
//       window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
//   }
//   return createStore(appReducer, initialState);
// }

// const initialState = window.initialReduxState;
// export const store = configureStore(initialState);

const persistConfig = {
  key: 'root',
  storage: storage,
};

const pReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(
  pReducer, // link Vscode store redux with google Chorme
  composeWithDevTools()
);
export const persistor = persistStore(store);
