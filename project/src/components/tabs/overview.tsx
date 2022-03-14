import { FilmCard } from '../../types';

function Overview(props: FilmCard) {
  return (
    <div>
      <div className="film-rating">
        <div className="film-rating__score">{props.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{props.assessmentRating}</span>
          <span className="film-rating__count">{props.numberOfRatings} ratings</span>
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
