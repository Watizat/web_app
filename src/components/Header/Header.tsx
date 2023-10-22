import { useMediaQuery } from 'react-responsive';
import { Fade as Hamburger } from 'hamburger-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleHamburger } from '../../store/reducers/hamburger';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Links from './Links/Links';
import styles from './Header.module.scss';

function Header() {
  const isTablet = useMediaQuery({ query: '(min-width: 769px)' });
  const isOpen = useAppSelector((state) => state.hamburger.isOpen);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      {pathname === '/resultats' || pathname === '/resultats/' ? (
        <div className={styles.resultsContainer}>
          <Link className={styles.logo} to="/">
            <img className={styles.logo_img} src={logo} alt="watizat logo" />
            <span className={styles.logo_text}>Watizat</span>
          </Link>
          <div className={styles.navbar}>
            <Links />
          </div>
          <div className={styles.hamburger}>
            <Hamburger
              toggled={isOpen}
              toggle={() => dispatch(toggleHamburger(!isOpen))}
            />
          </div>
          {isOpen && !isTablet && <BurgerMenu />}
        </div>
      ) : (
        <div className={styles.container}>
          <Link className={styles.logo} to="/">
            <img className={styles.logo_img} src={logo} alt="watizat logo" />
            <span className={styles.logo_text}>Watizat</span>
          </Link>
          <div className={styles.navbar}>
            <Links />
          </div>
          <div className={styles.hamburger}>
            <Hamburger
              toggled={isOpen}
              toggle={() => dispatch(toggleHamburger(!isOpen))}
            />
          </div>
          {isOpen && !isTablet && <BurgerMenu />}
        </div>
      )}
    </header>
  );
}

export default Header;
