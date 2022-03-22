import CardFilm from '../../components/card-film/card-film';
import Catalog from '../../components/catalog/catalog';
import PromoFilm from '../../components/promo-film/promo-film';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { NUMBER_OF_MOVIES_DISPLAYED } from '../../const';
import { useAppSelector } from '../../hooks';
import { FilmCard, Promo} from '../../types';


interface HomePageProps {
  films: Array<FilmCard>,
  promo: Promo;
}

const genres = [
  'All Genres', 'Comedies', 'Crime',
  'Documentary','Dramas', 'Horror', 'Kids & Family',
  'Romance', 'Sci-Fi', 'Thrillers',
];

const showMoreViewButton = (films: Array<FilmCard>, numberFilms: number) => {
  if( films.length > NUMBER_OF_MOVIES_DISPLAYED && films.length > numberFilms) {
    return < ShowMoreButton />;
  }
};

function HomePage({films, promo}: HomePageProps) {

  const currentGenre = useAppSelector((state) => state);

  const filterFilms = films.filter((it) => {
    if('All Genres' === currentGenre.genre){
      return it;
    }
    return it.genre === currentGenre.genre;
  });

  return (
    <div>
      <PromoFilm {...promo}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {genres.map((it,i) => <Catalog key={it} it={it} />)}
          </ul>

          <div className="catalog__films-list">
            {filterFilms
              .map((it) => <CardFilm key={it.id} {...it}/>)
              .slice(0, currentGenre.numberFilms)}
          </div>

          {showMoreViewButton(filterFilms, currentGenre.numberFilms)}

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
