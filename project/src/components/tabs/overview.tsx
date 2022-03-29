import { FILM_SCORE } from '../../const';
import { FilmServer } from '../../types';

function Overview(props: FilmServer) {
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
        <div className="film-rating__score">{filmScore(props)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{props.rating}</span>
          <span className="film-rating__count">{props.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{props.description}</p>
        <p>{props.description}</p>
        <p className="film-card__director"><strong>Director: {props.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {props.starring}</strong></p>
      </div>
    </div>
  );
}

export default Overview;
