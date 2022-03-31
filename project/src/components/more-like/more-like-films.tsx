import React from 'react';
import { useAppSelector } from '../../hooks';
import { FilmServer } from '../../types';
import MoreLikeFilm from './more-like-film';
interface MoreLikeFilmsProps {
  currentFilmServer: FilmServer;
}

function MoreLikeFilms({currentFilmServer}: MoreLikeFilmsProps) {
  const films = useAppSelector((state) => state.moreLikeFilmsServer);

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div className="catalog__films-list">
          {films.map((it) => {
            if(it.genre === currentFilmServer.genre){
              if(it.id === currentFilmServer.id){
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
