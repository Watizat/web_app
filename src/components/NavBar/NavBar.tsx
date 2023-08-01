import { Link } from 'react-router-dom';
import './NavBar.scss';

interface NavBarProps {
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavBar({ setMenuIsOpen }: NavBarProps) {
  return (
    <div className="navbar">
      <Link to="/" onClick={() => setMenuIsOpen(false)}>
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
