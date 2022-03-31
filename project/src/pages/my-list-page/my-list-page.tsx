// import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import FavoriteFilm from './favoriteFilm';

function MyListPage() {
  const {favoriteFilmsServer} = useAppSelector((state) => state);
  // eslint-disable-next-line no-console
  console.log('myListFavoriteFilms', favoriteFilmsServer);
  return (
    <div className="user-page">

      {/* <Header/> */}
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to='/' className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">

          {favoriteFilmsServer.map((it) =>
            <FavoriteFilm key={it.id} {...it}/>,
          )}

        </div>
      </section>
    </div>
  );
}

export default MyListPage;
