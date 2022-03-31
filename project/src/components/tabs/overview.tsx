import { FILM_SCORE } from '../../const';
import { useAppSelector } from '../../hooks';
import { FilmServer } from '../../types';

function Overview() {
  const {currentFilmServer} = useAppSelector((state) => state);
  const filmScore = (film: FilmServer) => {
    if(film.rating <= 3){
      return  FILM_SCORE.BAD;
    }else if(film.rating > 3 && film.rating<= 5){
      return  FILM_SCORE.NORMAL;
    }else if(film.rating > 5 && film.rating <= 8){
      return  FILM_SCORE.GOOD;
    }else if(film.rating > 8 && film.rating < 10){
      return  FILM_SCORE.VERY_GOOD;
    }else if(film.rating >= 10){
      return FILM_SCORE.AWESOME;
    }
  };

  return (
    <div>
      <div className="film-rating">
        <div className="film-rating__score">{filmScore(currentFilmServer)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{currentFilmServer.rating}</span>
          <span className="film-rating__count">{currentFilmServer.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{currentFilmServer.description}</p>
        <p className="film-card__director"><strong>Director: {currentFilmServer.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {currentFilmServer.starring}</strong></p>
      </div>
    </div>
  );
}

export default Overview;
