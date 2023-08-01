import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import NavBar from '../../NavBar/NavBar';
import './Header.scss';

function Header() {
  return (
    <header id="resultsHeader">
      <Link className="watizat-logo__topbar" to="/">
        <img src={logo} alt="watizat logo" className="watizat-logo__img" />
      </Link>
      <NavBar setMenuIsOpen={setMenuIsOpen} />
    </header>
  );
}

export default Header;
