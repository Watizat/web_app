import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { toggleHamburger } from '../../../store/reducers/hamburger';
import './NavBar.scss';

function NavBar() {
  const dispatch = useAppDispatch();
  return (
    <div className="navbar">
      <Link to="/" onClick={() => dispatch(toggleHamburger(false))}>
        Accueil
      </Link>
      {/* <Link to="/orientation"  onClick={() => setMenuIsOpen(false)}>Fil d&apos;orientation</Link> */}
      <Link to="https://watizat.org" target="_blank">
        Watizat.org
      </Link>
    </div>
  );
}

export default NavBar;
