import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { store } from './store';
import {
  fetchFilmsAction,
  checkAuthAction,
  fetchPromoAction,
  fetchFavoriteFilmsAction
} from './store/api-action';


store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchFavoriteFilmsAction());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />,
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);


