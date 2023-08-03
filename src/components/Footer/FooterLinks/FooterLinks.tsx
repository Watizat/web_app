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
        <Link
          to="/mentions-legales"
          onClick={() => dispatch(toggleHamburger(false))}
        >
          Mentions légales
        </Link>
        <Link to="/contact" onClick={() => dispatch(toggleHamburger(false))}>
          Nous contacter
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
