import { Link } from 'react-router-dom';
import { FilmServer } from '../../types';

function FavoriteFilm(props: FilmServer) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.previewImage} alt={props.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${props.id}`}>{props.name}</Link>
      </h3>
    </article>
  );
}

export default FavoriteFilm;
