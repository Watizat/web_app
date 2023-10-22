import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { logout } from '../../store/reducers/user';
import styles from './Login.module.scss';

function NewUser() {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.login}>
      <h1>Nouveau membre</h1>
      <span>Votre compte est en attente de validation.</span>
      <Link to="/" onClick={() => dispatch(logout())}>
        <button
          className="btn btn-flat btn-primary btn-slowRounded "
          type="button"
        >
          Se déconnecter
        </button>
      </Link>
    </div>
  );
}

export default NewUser;
