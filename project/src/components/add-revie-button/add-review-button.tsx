// import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


interface addReviewButtonProps {
  currentId: number;
}

function AddReviwButton({currentId}: addReviewButtonProps) {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`/films/${currentId}/review`)} className="btn film-card__button">Add review</button>
  );
}

export default AddReviwButton;
