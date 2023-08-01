import { Link } from 'react-router-dom';
import './NavBar.scss';

function NavBar({ MenuSetOpen }) {
  return (
    <div className="navbar">
      <Link to="/" onClick={() => MenuSetOpen(false)}>
        Accueil
      </Link>
      {/* <Link to="/orientation"  onClick={() => MenuSetOpen(false)}>Fil d&apos;orientation</Link> */}
      <Link to="https://watizat.org" target="_blank">
        Watizat.org
      </Link>
    </div>
  );
}

export default NavBar;
