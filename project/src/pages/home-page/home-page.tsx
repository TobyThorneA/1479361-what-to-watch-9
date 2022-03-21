// import { useDispatch } from 'react-redux';
import CardFilm from '../../components/card-film/card-film';
import Catalog from '../../components/catalog/catalog';
import PromoFilm from '../../components/promo-film/promo-film';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { NUMBER_OF_MOVIES_DISPLAYED } from '../../const';
import { useAppSelector } from '../../hooks';
// import { chanchingTheGenreComedies } from '../../store/action';
import { FilmCard, Promo} from '../../types';


interface HomePageProps {
  films: Array<FilmCard>,
  promo: Promo;
}

const catalogGenres = [
  'All Genres', 'Comedies', 'Crime',
  'Documentary','Dramas', 'Horror', 'Kids & Family',
  'Romance', 'Sci-Fi', 'Thrillers',
];

const showMoreViewButton = (films: Array<FilmCard>, numberFilms: number) => {
  if( films.length > NUMBER_OF_MOVIES_DISPLAYED && films.length > numberFilms) {
    return < ShowMoreButton />;
  }
};

function HomePage(props: HomePageProps) {
  const selector = useAppSelector((state) => state);

  const filterFilms = props.films.filter((it) => {
    if('All Genres' === selector.genre){
      return it;
    }else if(it.genre === selector.genre){
      return it;
    }
    return null;
  });

  return (
    <div>
      <PromoFilm {...props.promo}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {catalogGenres.map((it,i) => <Catalog key={it} it={it} />)}
          </ul>

          <div className="catalog__films-list">
            {filterFilms
              .map((it) => <CardFilm key={it.id} {...it}/>)
              .slice(0, selector.numberFilms)}
          </div>

          {showMoreViewButton(filterFilms, selector.numberFilms)}

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
