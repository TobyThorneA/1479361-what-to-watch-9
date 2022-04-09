import { FILM_SCORE } from '../../const';
import { useAppSelector } from '../../hooks';
import { Film } from '../../types';

const ratingFilm = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10,
};

function Overview() {
  const currentFilm = useAppSelector((state) => state.currentFilm);
  const filmScore = (film: Film) => {
    if(film.rating <= ratingFilm.BAD){
      return  FILM_SCORE.BAD;
    }else if(film.rating > ratingFilm.BAD && film.rating<= ratingFilm.NORMAL){
      return  FILM_SCORE.NORMAL;
    }else if(film.rating > ratingFilm.NORMAL && film.rating <= ratingFilm.GOOD){
      return  FILM_SCORE.GOOD;
    }else if(film.rating > ratingFilm.GOOD && film.rating < ratingFilm.VERY_GOOD){
      return  FILM_SCORE.VERY_GOOD;
    }else if(film.rating >= ratingFilm.VERY_GOOD){
      return FILM_SCORE.AWESOME;
    }
  };

  return (
    <div>
      <div className="film-rating">
        <div className="film-rating__score">{filmScore(currentFilm)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{currentFilm.rating}</span>
          <span className="film-rating__count">{currentFilm.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{currentFilm.description}</p>
        <p className="film-card__director"><strong>Director: {currentFilm.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {currentFilm.starring}</strong></p>
      </div>
    </div>
  );
}

export default Overview;
