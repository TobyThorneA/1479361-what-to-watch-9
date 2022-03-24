import { useAppDispatch } from '../../hooks';
import { showMore } from '../../store/action';

function ShowMoreButton() {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more" onClick={() => dispatch(showMore())}>
      <button className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;
