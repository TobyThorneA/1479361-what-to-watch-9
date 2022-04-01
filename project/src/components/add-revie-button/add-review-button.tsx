import { Link } from 'react-router-dom';


interface addReviewButtonProps {
  currentId: number;
}

function AddReviwButton({currentId}: addReviewButtonProps) {
  return (
    <Link to={
      `/films/${currentId}/review`
    }
    key={currentId}
    className="btn film-card__button"
    >Add review
    </Link>
  );
}

export default AddReviwButton;
