import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import Header from '../../components/header/header';
import NotFoundPage from '../not-found-page/not-found-page';
import Index from '../../components/tabs';
import MoreLikeFilms from '../../components/more-like/more-like-films';
import {  useAppSelector } from '../../hooks';
import AddReviewLink from './add-review-link';
import { store } from '../../store';
import { fetchCommentsAction, fetchCurrentFilmsAction, fetchShowMoreFilmsAction } from '../../store/api-action';
import { useEffect } from 'react';
import MyListButton from './my-list-button';


function FilmPage() {
  const { authorizationStatus, currentFilmServer} = useAppSelector((state) => state);
  const {id}= useParams();


  useEffect(() => {
    store.dispatch(fetchCurrentFilmsAction(Number(id)));
    store.dispatch(fetchCommentsAction(Number(id)));
    store.dispatch(fetchShowMoreFilmsAction(Number(id)));
  }, [id]);

  if(!currentFilmServer){
    return <NotFoundPage/>;
  }


  const renderAddReviewButton = (currentId: number) => {
    if(authorizationStatus === AuthorizationStatus.Auth){
      return <AddReviewLink currentId = {currentId}/>;
    }
  };

  const renderMyListButton = () => {
    if(authorizationStatus === AuthorizationStatus.Auth){
      return <MyListButton />;
    }
  };

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilmServer.posterImage} alt={currentFilmServer.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilmServer.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilmServer.genre}</span>
                <span className="film-card__year">{currentFilmServer.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <Link to={`/player/${currentFilmServer.id}`} key={currentFilmServer.id}><span>Play</span></Link>
                </button>
                {renderMyListButton()}
                {renderAddReviewButton(currentFilmServer.id)}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilmServer.posterImage} alt={currentFilmServer.name} width="218" height="327" />
            </div>

            <Index {...currentFilmServer} />

          </div>
        </div>
      </section>

      <MoreLikeFilms currentFilmServer={currentFilmServer} />

    </div>
  );
}

export default FilmPage;
