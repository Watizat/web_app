import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { toggleHamburger } from '../../../store/reducers/hamburger';
import styles from './Links.module.scss';

function FooterLinks() {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.links}>
      <div className={styles.links_sub}>
        <Link to="/" onClick={() => dispatch(toggleHamburger(false))}>
          Watizat 2023
        </Link>
        <Link to="https://watizat.org/qui-sommes-nous/" target="_blank">
          Qui sonnes-nous ?
        </Link>
      </div>
      <div className={styles.links_sub}>
        <Link to="https://watizat.org/nous-contacter/" target="_blank">
          Nous contacter
        </Link>
        <Link
          to="/mentions-legales"
          onClick={() => dispatch(toggleHamburger(false))}
        >
          Mentions légales
        </Link>
        <Link to="https://feedback.watizat.app" target="_blank">
          Bugs et suggestions
        </Link>
      </div>
    </div>
  );
}

export default FooterLinks;
