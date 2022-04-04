import { Film } from '../../types';
import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

function CardFilm(props: Film) {

  return (
    <article className="small-film-card catalog__films-card">
      <Link className="small-film-card__link" to={`/films/${props.id}`}>

        <VideoPlayer {...props}/>

        <h3 className="small-film-card__title">
          <Link className="small-film-card__link" to={`/films/${props.id}`} key={props.id}>{props.name}</Link>
        </h3>
      </Link>
    </article>

  );
}

export default CardFilm;
