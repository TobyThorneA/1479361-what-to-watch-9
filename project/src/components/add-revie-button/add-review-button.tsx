import { Link } from 'react-router-dom';
import { FilmServer } from '../../types';

function AddReviwButton(props: FilmServer) {
  return (
    <Link to={
      `/films/${props.id}/review`
    }
    key={props.id}
    className="btn film-card__button"
    >Add review
    </Link>
  );
}

export default AddReviwButton;
