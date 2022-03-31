import {  useAppDispatch, useAppSelector } from '../../hooks';
import { store } from '../../store';
import { trueFalse } from '../../store/action';
import { filmStatusAction } from '../../store/api-action';

function MyListButton() {
  const dispatch = useAppDispatch();
  const {promoServer} = useAppSelector((state) => state);

  const clickMyListButton = () => {
    const data = {
      id: promoServer.id,
      status: Number(!promoServer.isFavorite),
    };

    dispatch(trueFalse(!!data.status));
    store.dispatch(filmStatusAction(data));


  };
  return (
    <button onClick={() => clickMyListButton()} className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={promoServer.isFavorite?'#in-list':'#add'}></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

export default MyListButton;
