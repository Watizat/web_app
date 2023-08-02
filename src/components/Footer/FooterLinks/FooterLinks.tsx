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
      <Link
        to="/mentions-legales"
        onClick={() => dispatch(toggleHamburger(false))}
      >
        Mentions légales
      </Link>
      <Link to="/contact" onClick={() => dispatch(toggleHamburger(false))}>
        Nous contacter
      </Link>
      <Link
        className="important"
        to={`${user ? '/admin/dashboard' : '/login'}`}
        onClick={() => dispatch(toggleHamburger(false))}
      >
        Membres Watizat
      </Link>
    </div>
  );
}

export default FooterLinks;
