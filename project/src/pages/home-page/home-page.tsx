// import { useDispatch } from 'react-redux';
import CardFilm from '../../components/card-film/card-film';
import Catalog from '../../components/catalog/catalog';
import PromoFilm from '../../components/promo-film/promo-film';
import { useAppSelector } from '../../hooks';
// import { chanchingTheGenreComedies } from '../../store/action';
import { FilmCard, Promo} from '../../types';


interface HomePageProps {
  films: Array<FilmCard>,
  promo: Promo;
}

const arr = [
  'All Genres', 'Comedies', 'Crime',
  'Documentary','Dramas', 'Horror', 'Kids & Family',
  'Romance', 'Sci-Fi', 'Thrillers',
];

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
            {arr.map((it,i) => <Catalog key={it} it={it} />)}
          </ul>

          <div className="catalog__films-list">
            {filterFilms.map((it) => <CardFilm key={it.id} {...it}/>)}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
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
