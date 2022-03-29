import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { PromoServer } from '../../types';
import Header from '../header/header';

function PromoFilm(props: PromoServer ) {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={props.backgroundImage} alt={props.name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={props.previewImage} alt={props.name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{props.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{props.genre}</span>
              <span className="film-card__year">{props.released}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <Link to={AppRoute.MyList}>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default PromoFilm;
