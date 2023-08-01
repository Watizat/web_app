import { Fade as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Container from '../Container/Container';
import NavBar from '../NavBar/NavBar';
import './Header.scss';

interface HeaderProps {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ menuIsOpen, setMenuIsOpen }: HeaderProps) {
  return (
    <header id="header">
      <Container>
        <Link className="header-logo" to="/">
          <img src={logo} alt="watizat logo" />
        </Link>
        <div className="header-navbar">
          <NavBar setMenuIsOpen={setMenuIsOpen} />
        </div>
        <div className="header-hamburger">
          <Hamburger toggled={menuIsOpen} toggle={setMenuIsOpen} />
        </div>
        {menuIsOpen && <BurgerMenu setMenuIsOpen={setMenuIsOpen} />}
      </Container>
    </header>
  );
}

export default Header;
