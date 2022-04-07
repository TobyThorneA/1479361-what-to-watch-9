import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { getDataUser } from '../../services/token';
import { store } from '../../store';
import { defaultFilmsCount } from '../../store/action';
import { fetchFavoriteFilmsAction, logoutAction } from '../../store/api-action';

function SignOutButton() {
  const dispatch = useAppDispatch();
  const dataUser = getDataUser();

  return (
    <ul className="user-block" onClick={() => dispatch(defaultFilmsCount())} >
      <li className="user-block__item">
        <div onClick={() => store.dispatch(fetchFavoriteFilmsAction())} className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img src={dataUser.avatarUrl} alt={dataUser.name} width="63" height="63" />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link
          onClick={(evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          to='/'
          className="user-block__link"
        >Sign out
        </Link>
      </li>
    </ul>
  );
}

export default SignOutButton;
