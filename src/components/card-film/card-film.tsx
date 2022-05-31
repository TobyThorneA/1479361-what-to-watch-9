import {  Film } from '../../types';
import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import { useAppDispatch } from '../../hooks';
import { defaultFilmsCount } from '../../store/action';

function CardFilm(props: Film) {

  const dispatch = useAppDispatch();

  return (
    <article onClick={() => {
      dispatch(defaultFilmsCount());
    }} className="small-film-card catalog__films-card"
    >
      <Link className="small-film-card__link" to={`/films/${props.id}`}>

        <VideoPlayer {...props}/>

        <h3 className="small-film-card__title">
          <li className="small-film-card__link"  key={props.id}>{props.name}</li>
        </h3>
      </Link>
    </article>

  );
}

export default CardFilm;
