import { Link } from 'react-router-dom';
interface addReviewLinkProps {
  currentId: number;
}

function AddReviewLink({currentId}: addReviewLinkProps) {
  return (
    <Link to={`/films/${currentId}/review`} key={currentId} className="btn film-card__button">Add review</Link>
  );
}

export default AddReviewLink;
