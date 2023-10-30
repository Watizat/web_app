import { Link } from 'react-router-dom';
import logo from '../../assets/logo-grey.svg';
import { useAppDispatch } from '../../hooks/redux';
import { toggleHamburger } from '../../store/reducers/hamburger';
import HeaderLinks from '../Header/linksData';
import FooterLinks from '../Footer/linksData';
// import FooterLinks from '../Footer/Links/Links';
import styles from './BurgerMenu.module.scss';

function BurgerMenu() {
  const dispatch = useAppDispatch();
  const handleLinkClick = () => {
    dispatch(toggleHamburger(false));
  };
  return (
    <div className={styles.burgerMenu}>
      <div className={styles.content}>
        <div className={styles.content_container}>
          <Link className={styles.content_logo} to="/">
            <img src={logo} alt="watizat logo" />
          </Link>
          <div className={styles.content_navbar}>
            <div className={styles.content_navbar__links}>
              <div className={styles.content_navbar__links___sub}>
                {HeaderLinks.filter((e) => e.mobile).map((e) => (
                  <Link
                    key={e.name}
                    to={e.to || '/'}
                    target={e.target}
                    onClick={handleLinkClick}
                  >
                    {e.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.content_navbar}>
            <div className={styles.content_navbar__links}>
              <div className={styles.content_navbar__links___sub}>
                {FooterLinks.filter((e) => e.mobile).map((e) => (
                  <Link
                    key={e.name}
                    to={e.to || '/'}
                    target={e.target}
                    onClick={handleLinkClick}
                  >
                    {e.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
