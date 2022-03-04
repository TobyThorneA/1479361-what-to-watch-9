import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films, promo} from './mock/card-film-mock';


ReactDOM.render(
  <React.StrictMode>
    <App films={films} promo={promo}/>,
  </React.StrictMode>,
  document.getElementById('root'),
);
