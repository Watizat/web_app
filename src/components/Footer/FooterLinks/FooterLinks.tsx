import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { toggleHamburger } from '../../../store/reducers/hamburger';
import './FooterLinks.scss';
import { getUserDataFromLocalStorage } from '../../../utils/user';

function FooterLinks() {
  const dispatch = useAppDispatch();
  const user = getUserDataFromLocalStorage();
  return (
    <div className="footerlinks">
      <div className="footerlinks-sub">
        <Link to="/" onClick={() => dispatch(toggleHamburger(false))}>
          Watizat 2023
        </Link>
        <Link to="https://watizat.org/qui-sommes-nous/" target="_blank">
          Qui sonnes-nous ?
        </Link>
        <Link to="https://watizat.org/nous-contacter/" target="_blank">
          Nous contacter
        </Link>
        <Link
          to="/mentions-legales"
          onClick={() => dispatch(toggleHamburger(false))}
        >
          Mentions légales
        </Link>
      </div>
      <div className="footerlinks-sub">
        <Link to="https://feedback.watizat.app" target="_blank">
          Bugs et suggestions
        </Link>
        <Link
          className="important"
          to={`${user ? '/admin/dashboard' : '/login'}`}
          onClick={() => dispatch(toggleHamburger(false))}
        >
          Membres Watizat
        </Link>
      </div>
    </div>
  );
}

export default FooterLinks;
