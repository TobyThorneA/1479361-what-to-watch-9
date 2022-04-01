import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import SignInButton from '../sign-in-button/sign-in-button';
import SignOutButton from '../sign-out-button/sign-out-button';

interface HeaderProps {
  element?: JSX.Element
}

function Header({element}: HeaderProps) {
  const {authorizationStatus} = useAppSelector((state) => state);
  const signInOrSignOut = () => {
    if(authorizationStatus === AuthorizationStatus.Auth){
      return <SignOutButton/>;
    }
    return <SignInButton/>;
  };


  // eslint-disable-next-line no-console
  // console.log('element', element);
  // const elementInHeader = (data : HeaderProps) => {
  //   if(data){
  //     return data;
  //   }
  // };

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
      {signInOrSignOut()}
    </header>
  );
}

export default Header;
