import { useAppSelector } from '../../hooks';
import FavoriteFilm from '../../components/favorite-film/favorite-film';
import { Link } from 'react-router-dom';
import SignOutButton from '../../components/sign-out-button/sign-out-button';

function MyListPage() {
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);

  return (
    <div className="user-page">

      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <SignOutButton/>

        {/* <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to='/' className="user-block__link">Sign out</Link>
          </li>
        </ul> */}
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">

          {favoriteFilms.map((it) =>
            <FavoriteFilm key={it.id} {...it}/>,
          )}

        </div>
      </section>
    </div>
  );
}

export default MyListPage;
