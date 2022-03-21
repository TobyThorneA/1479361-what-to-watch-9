import { useAppDispatch } from '../../hooks';
import { clickShowMoreButton } from '../../store/action';

function ShowMoreButton() {

  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more" onClick={() => dispatch(clickShowMoreButton()) }>
      <button className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;
