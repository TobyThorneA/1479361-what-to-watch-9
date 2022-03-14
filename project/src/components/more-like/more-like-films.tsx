import React from 'react';
import { FilmCard } from '../../types';
import MoreLikeFilm from './more-like-film';
interface MoreLikeFilmsProps {
  films: Array<FilmCard>;
  dataFilm: FilmCard;
}

function MoreLikeFilms({films, dataFilm}: MoreLikeFilmsProps) {

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div className="catalog__films-list">
          {films.map((it) => {
            if(it.genre === dataFilm.genre){
              if(it.id === dataFilm.id){
                return null;
              }
              return <MoreLikeFilm {...it}/>;
            }
            return null;
          }).slice(0, 5)}
        </div>
      </section>
    </div>
  );
}

export default MoreLikeFilms;
