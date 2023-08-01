import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { logout } from '../../store/reducers/user';
import './Login.scss';

function NewUser() {
  const dispatch = useAppDispatch();
  return (
    <div className="login">
      <h1>Nouveau membre</h1>
      <span>Votre compte est en attente de validation.</span>
      <Link to="/" onClick={() => dispatch(logout())}>
        <button type="button">Se déconnecter</button>
      </Link>
    </div>
  );
}

export default NewUser;
