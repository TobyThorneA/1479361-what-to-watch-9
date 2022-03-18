import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { films, promo} from './mock/card-film-mock';
import {store} from './store/index';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={films} promo={promo}/>,
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);
