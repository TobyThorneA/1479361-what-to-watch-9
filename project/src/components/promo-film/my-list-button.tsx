import {  useAppDispatch, useAppSelector } from '../../hooks';
import { store } from '../../store';
import { statusPromoFilm } from '../../store/action';
import { addFilmStatusAction } from '../../store/api-action';

function MyListButton() {
  const dispatch = useAppDispatch();
  const {promoFilm} = useAppSelector((state) => state);

  const clickMyListButton = () => {
    const data = {
      id: promoFilm.id,
      status: Number(!promoFilm.isFavorite),
    };

    dispatch(statusPromoFilm(!!data.status));
    store.dispatch(addFilmStatusAction(data));


  };
  return (
    <button onClick={() => clickMyListButton()} className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={promoFilm.isFavorite?'#in-list':'#add'}></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

export default MyListButton;
