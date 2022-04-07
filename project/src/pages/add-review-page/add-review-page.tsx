import {Link, useParams} from 'react-router-dom';
import CommentSubmissionForm from '../../components/comment-submission-form/comment-submission-form';
import SignOutButton from '../../components/sign-out-button/sign-out-button';
import { APIRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import NotFoundPage from '../not-found-page/not-found-page';


function AddReviewPage() {
  const films = useAppSelector((state) => state.allFilms);
  const {id} = useParams();
  const dataFilm = films.find((it) => it.id === Number(id));

  if(!dataFilm){
    return <NotFoundPage/>;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={dataFilm.previewImage} alt={dataFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${dataFilm.id}`} className="breadcrumbs__link">{dataFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`${APIRoute.Films}/${dataFilm.id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <SignOutButton />

        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={dataFilm.previewImage} alt={dataFilm.name} width="218" height="327" />
        </div>
      </div>

      <CommentSubmissionForm {...dataFilm}/>

    </section>
  );
}

export default AddReviewPage;
