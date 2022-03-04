import {Link, useParams} from 'react-router-dom';
import CommentSubmissionForm from '../../components/comment-submission-form/comment-submission-form';
import { FilmCard } from '../../types';
import NotFoundPage from '../not-found-page/not-found-page';
interface AddReviewPageProps {
  films: Array<FilmCard>,
}

function AddReviewPage({films}: AddReviewPageProps) {
  const {id} = useParams();
  const dataFilm = films.find((it) => it.id === Number(id));

  if(!dataFilm){
    return <NotFoundPage/>;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={dataFilm.img} alt={dataFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          {/*Блок нав в хедере есть только у адд ривью. чтото придумать надо  */}
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${dataFilm.id}`} className="breadcrumbs__link">{dataFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={'/'} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to={'/login'} className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={dataFilm.img} alt={dataFilm.name} width="218" height="327" />
        </div>
      </div>

      <CommentSubmissionForm/>

    </section>
  );
}

export default AddReviewPage;
