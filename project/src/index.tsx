import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {movies, promo} from './mock/card-film-mock';


ReactDOM.render(
  <React.StrictMode>
    <App movies={movies} promo={promo}/>
  </React.StrictMode>,
  document.getElementById('root'),
);
