import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import SignIn from './sign-in';
import SignOut from './sign-out';

function Header() {
  const {authorizationStatus} = useAppSelector((state) => state);
  const signInOrSignOut = () => {
    if(authorizationStatus === AuthorizationStatus.Auth){
      return <SignOut/>;
    }
    return <SignIn/>;
  };

  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {signInOrSignOut()}
    </header>
  );
}

export default Header;
