import { Fade as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import NavBar from '../../NavBar/NavBar';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { toggleHamburger } from '../../../store/reducers/hamburger';
import BurgerMenu from '../../BurgerMenu/BurgerMenu';
import './Header.scss';

function Header() {
  const isOpen = useAppSelector((state) => state.hamburger.isOpen);
  const dispatch = useAppDispatch();
  return (
    <header id="resultsHeader">
      <Link className="watizat-logo__topbar" to="/">
        <img src={logo} alt="watizat logo" className="watizat-logo__img" />
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
    </header>
  );
}

export default Header;
