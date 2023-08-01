import { useMediaQuery } from 'react-responsive';
import { Fade as Hamburger } from 'hamburger-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleHamburger } from '../../store/reducers/hamburger';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Container from '../Container/Container';
import NavBar from './NavBar/NavBar';
import './Header.scss';

function Header() {
  const isTablet = useMediaQuery({ query: '(min-width: 769px)' });
  const isOpen = useAppSelector((state) => state.hamburger.isOpen);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  return (
    <header id="header">
      {pathname === '/resultats/' ? (
        <div className="header-reasultsContainer">
          <Link className="header-logo" to="/">
            <img src={logo} alt="watizat logo" />
          </Link>
          <div className="header-navbar">
            <NavBar />
          </div>
          <div className="header-hamburger">
            <Hamburger
              toggled={isOpen}
              toggle={() => dispatch(toggleHamburger(!isOpen))}
            />
          </div>
          {isOpen && <BurgerMenu />}
        </div>
      ) : (
        <Container>
          <Link className="header-logo" to="/">
            <img src={logo} alt="watizat logo" />
          </Link>
          <div className="header-navbar">
            <NavBar />
          </div>
          <div className="header-hamburger">
            <Hamburger
              toggled={isOpen}
              toggle={() => dispatch(toggleHamburger(!isOpen))}
            />
          </div>
          {isOpen && !isTablet && <BurgerMenu />}
        </Container>
      )}
    </header>
  );
}

export default Header;
