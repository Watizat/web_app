import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Container from '../Container/Container';
import NavBar from '../NavBar/NavBar';
import './Header.scss';

function Header() {
  return (
    <header id="header">
      <Container>
        <Link className="watizat-logo-topbar" to="/">
          <img src={logo} alt="watizat logo" />
        </Link>
        <NavBar />
      </Container>
    </header>
  );
}

export default Header;
