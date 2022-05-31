import { useAppSelector } from '../../hooks';
import { Film } from '../../types';
import MoreLikeFilm from '../more-like-film/more-like-film';
interface MoreLikeFilmsProps {
  currentFilm: Film;
}

function MoreLikeFilms({currentFilm}: MoreLikeFilmsProps) {
  const films = useAppSelector((state) => state.moreLikeFilms);

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div className="catalog__films-list">
          {films.map((it) => {
            if(it.genre === currentFilm.genre){
              if(it.id === currentFilm.id){
                return null;
              }
              return <MoreLikeFilm key={it.id} {...it}/>;
            }
            return null;
          }).slice(0, 5)}
        </div>
      </section>
    </div>
  );
}

export default MoreLikeFilms;
