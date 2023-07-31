import { Link } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">Accueil</Link>
      {/* <Link to="/orientation">Fil d&apos;orientation</Link> */}
      <Link to="https://watizat.org" target="_blank">
        Watizat.org
      </Link>
    </div>
  );
}

export default NavBar;
