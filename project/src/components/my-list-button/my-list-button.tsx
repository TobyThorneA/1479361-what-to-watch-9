import { useAppDispatch, useAppSelector } from '../../hooks';
import { store } from '../../store';
import { setCurrentFilmStatus, setPromoFilmStatus } from '../../store/action';
import {  addFilmStatusAction } from '../../store/api-action';


function MyListButton() {

  const dispatch = useAppDispatch();
  const currentFilm = useAppSelector((state) => state.currentFilm);

  const clickMyListButton = () => {

    const data = {
      id: currentFilm.id,
      status: Number(!currentFilm.isFavorite),
    };

    dispatch(setPromoFilmStatus(!!data.status));
    dispatch(setCurrentFilmStatus(!!data.status));
    store.dispatch(addFilmStatusAction(data));

  };


  return (
    <button onClick={clickMyListButton} className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={currentFilm.isFavorite?'#in-list':'#add'}></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

export default MyListButton;
