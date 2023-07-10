import { Link } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">Accueil</Link>
      <Link to="/orientation">Fil d&apos;orientation</Link>
      <Link to="/admin">Membres Watizat</Link>
    </div>
  );
}

export default NavBar;
