import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import SignInButton from '../sign-in-button/sign-in-button';
import SignOutButton from '../sign-out-button/sign-out-button';

interface HeaderProps {
  element?: JSX.Element
}

function Header({element}: HeaderProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
        {/* {elementInHeader(element)} */}
      </div>
      {authorizationStatus ===
      AuthorizationStatus.Auth
        ? <SignOutButton/>
        : <SignInButton/>}
    </header>
  );
}

export default Header;
