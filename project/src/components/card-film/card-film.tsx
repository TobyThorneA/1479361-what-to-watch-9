import { FilmCard } from '../../types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CardFilm(props: FilmCard) {
  const [id, setId] = useState(-1);
  // eslint-disable-next-line no-console
  console.log(id);
  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => setId(props.id)}
      onMouseLeave={() => setId(-1)}
    >
      <Link className="small-film-card__link" to={`/films/${props.id}`}>
        <div
          className="small-film-card__image"
        >
          <img src={props.img} alt={props.name} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          <Link className="small-film-card__link" to={`/films/${props.id}`} key={props.id}>{props.name}</Link>
        </h3>
      </Link>
    </article>

  );
}

export default CardFilm;
