import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import NavBar from '../../NavBar/NavBar';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="watizat logo" />
      </Link>
      <NavBar />
    </header>
  );
}

export default Header;
