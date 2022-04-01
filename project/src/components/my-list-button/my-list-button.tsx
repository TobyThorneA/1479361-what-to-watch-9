import { useAppDispatch, useAppSelector } from '../../hooks';
import { store } from '../../store';
import { statusCurrentFilm, statusPromoFilm } from '../../store/action';
import {  addFilmStatusAction } from '../../store/api-action';

interface FilmPageProps {
  checkinForAPromoFilm: boolean
}

function MyListButton({checkinForAPromoFilm}: FilmPageProps) {

  const dispatch = useAppDispatch();
  const {currentFilm, promoFilm} = useAppSelector((state) => state);

  const clickMyListButton = () => {

    let data = {
      id: currentFilm.id,
      status: Number(!currentFilm.isFavorite),
    };

    if(checkinForAPromoFilm){
      if(promoFilm.id === currentFilm.id){
        dispatch(statusPromoFilm(!!data.status));
        store.dispatch(addFilmStatusAction(data));
      }else if(promoFilm.id !== currentFilm.id){
        data = {
          id: promoFilm.id,
          status: Number(!promoFilm.isFavorite),
        };
        dispatch(statusCurrentFilm(!!data.status));
        store.dispatch(addFilmStatusAction(data));
      }
    }

    dispatch(statusCurrentFilm(!!data.status));
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
