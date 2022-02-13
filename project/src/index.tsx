import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import obj from './mock/card-film-mock';

const dataFilmPromo ={
  nameFilm: 'Vasya',
  genre: 'comedy',
  date:2015,
};

ReactDOM.render(

  <React.StrictMode>
    <App {...{obj}}{...{dataFilmPromo}}/>
  </React.StrictMode>,
  document.getElementById('root'));
