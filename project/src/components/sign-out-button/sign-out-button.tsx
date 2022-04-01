import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { store } from '../../store';
import { fetchFavoriteFilmsAction, logoutAction } from '../../store/api-action';

function SignOutButton() {
  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div onClick={() => store.dispatch(fetchFavoriteFilmsAction())} className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
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
