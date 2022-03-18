import { FilmCard } from '../../types';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../../components/header/header';
import NotFoundPage from '../not-found-page/not-found-page';
import Index from '../../components/tabs';
import MoreLikeFilms from '../../components/more-like/more-like-films';

interface FilmPageProps {
  films: Array<FilmCard>,
}

function FilmPage({films}: FilmPageProps) {
  const {id}= useParams();
  const dataFilm = films.find((it) => it.id === Number(id));

  if(!dataFilm){
    return <NotFoundPage/>;
  }
  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={dataFilm.img} alt={dataFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{dataFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{dataFilm.genre}</span>
                <span className="film-card__year">{dataFilm.date}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <Link to={`/player/${dataFilm.id}`} key={dataFilm.id}><span>Play</span></Link>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <Link to={AppRoute.MyList} ><span>My list</span></Link>
                </button>
                <Link to={`/films/${dataFilm.id}/review`} key={dataFilm.id} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={dataFilm.img} alt={dataFilm.name} width="218" height="327" />
            </div>

            <Index {...dataFilm}/>

          </div>
        </div>
      </section>

      <MoreLikeFilms films={films} dataFilm={dataFilm}/>

    </div>
  );
}

export default FilmPage;
