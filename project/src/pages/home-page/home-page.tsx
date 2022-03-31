import React from 'react';
import CardFilm from '../../components/card-film/card-film';
import CatalogItem from '../../components/catalog/catalog-item';
import PromoFilm from '../../components/promo-film/promo-film';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/action';

// const genres = [
//   'All Genres', 'Comedies', 'Crime',
//   'Documentary','Dramas', 'Horror', 'Kids & Family',
//   'Romance', 'Sci-Fi', 'Thrillers',
// ];

const genres = [
  'All Genres', 'Comedy', 'Crime',
  'Adventure', 'Drama', 'Fantasy',
  'Action', 'Thriller',
];

function HomePage() {
  const {filmsServer, promoServer} = useAppSelector((state) => state);

  const currentGenre = useAppSelector((state) => state.genre);
  const currentFilm = useAppSelector((state) => state.filmsCount);
  const dispatch = useAppDispatch();

  const filterFilms = filmsServer.filter((it) => {
    if('All Genres' === currentGenre){
      return it;
    }
    return it.genre === currentGenre;
  });

  const onCatalogItemClick = (evt: React.MouseEvent<HTMLLIElement>) => {
    if(evt.currentTarget && evt.currentTarget.dataset.value){
      dispatch(changeGenre(evt.currentTarget.dataset.value));
    }
  };

  return (
    <div>
      <PromoFilm {...promoServer}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {genres.map((title) => (
              <CatalogItem
                isActive={title === currentGenre}
                key={title} title={title}
                onClick={onCatalogItemClick}
              />
            ),
            )}
          </ul>

          <div className="catalog__films-list">
            {filterFilms
              .slice(0, currentFilm)
              .map((it) => <CardFilm key={it.id} {...it}/>)}
          </div>

          {filterFilms.length > currentFilm && <ShowMoreButton/>}

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="/"className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
