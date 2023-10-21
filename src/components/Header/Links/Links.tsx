import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { toggleHamburger } from '../../../store/reducers/hamburger';
import { getUserDataFromLocalStorage } from '../../../utils/user';
import styles from './Links.module.scss';

function NavBar() {
  const dispatch = useAppDispatch();
  const user = getUserDataFromLocalStorage();
  return (
    <div className={styles.navbar}>
      <Link to="/" onClick={() => dispatch(toggleHamburger(false))}>
        Accueil
      </Link>
      {/* <Link to="/orientation"  onClick={() => setMenuIsOpen(false)}>Fil d&apos;orientation</Link> */}
      <Link to="https://watizat.org" target="_blank">
        Watizat.org
      </Link>
      <Link
        className={styles.important}
        to={`${user ? '/admin/dashboard' : '/login'}`}
        onClick={() => dispatch(toggleHamburger(false))}
      >
        Membres Watizat
      </Link>
    </div>
  );
}

export default NavBar;
