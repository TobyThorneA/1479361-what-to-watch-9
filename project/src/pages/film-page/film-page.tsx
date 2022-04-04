import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import Header from '../../components/header/header';
import NotFoundPage from '../not-found-page/not-found-page';
import Index from '../../components/tabs';
import MoreLikeFilms from '../../components/more-like/more-like-films';
import {  useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchCommentsAction, fetchCurrentFilmsAction, fetchShowMoreFilmsAction } from '../../store/api-action';
import { useEffect } from 'react';
import MyListButton from '../../components/my-list-button/my-list-button';
import AddReviwButton from '../../components/add-revie-button/add-review-button';


function FilmPage() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const currentFilm = useAppSelector((state) => state.currentFilm);
  const {id}= useParams();

  useEffect(() => {
    store.dispatch(fetchCurrentFilmsAction(Number(id)));
    store.dispatch(fetchCommentsAction(Number(id)));
    store.dispatch(fetchShowMoreFilmsAction(Number(id)));
  }, [id]);

  if(!currentFilm || !currentFilm.id){
    return <NotFoundPage/>;
  }

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.posterImage} alt={currentFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <Link to={`/player/${currentFilm.id}`} key={currentFilm.id}><span>Play</span></Link>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth? <MyListButton/>: ''}
                {authorizationStatus === AuthorizationStatus.Auth? <AddReviwButton currentId = {currentFilm.id} /> : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.posterImage} alt={currentFilm.name} width="218" height="327" />
            </div>

            <Index {...currentFilm} />

          </div>
        </div>
      </section>

      <MoreLikeFilms currentFilm={currentFilm} />

    </div>
  );
}

export default FilmPage;
