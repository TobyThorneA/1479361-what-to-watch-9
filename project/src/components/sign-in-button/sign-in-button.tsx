import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { defaultFilmsCount } from '../../store/action';

function SignInButton() {
  const dispatch = useAppDispatch();

  return (
    <div className="user-block" onClick={() => dispatch(defaultFilmsCount())} >
      <Link to="/login" className="user-block__link">Sign in</Link>
    </div>
  );
}

export default SignInButton;
