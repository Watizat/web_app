import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Container from '../Container/Container';
import NavBar from '../NavBar/NavBar';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.scss';

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header id="header">
      <Container>
        <Link className="header-logo" to="/">
          <img src={logo} alt="watizat logo" />
        </Link>
        <div className="header-navbar">
          <NavBar />
        </div>
        <div className="header-hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        {isOpen && <BurgerMenu setOpen={setOpen} />}
      </Container>
    </header>
  );
}

export default Header;
