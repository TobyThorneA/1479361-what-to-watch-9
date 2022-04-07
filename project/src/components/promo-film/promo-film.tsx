import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { PromoServer } from '../../types';
import Header from '../header/header';
import MyListButton from '../../components/my-list-button-promo/my-list-button';
import { useNavigate } from 'react-router-dom';


function PromoFilm(props: PromoServer ) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate =useNavigate();

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
              <button onClick={() => navigate(`/player/${props.id}`)} className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>

              {authorizationStatus === AuthorizationStatus.Auth? <MyListButton/>: ''}

            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default PromoFilm;
