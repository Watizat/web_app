import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import Container from '../../Container/Container';
import NavBar from '../../NavBar/NavBar';
import './Header.scss';

function Header() {
  return (
    <header id="resultsHeader">
      <Link className="watizat-logo__topbar" to="/">
        <img src={logo} alt="watizat logo" className="watizat-logo__img" />
      </Link>
      <NavBar />
    </header>
  );
}

export default Header;
