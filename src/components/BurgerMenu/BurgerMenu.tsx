import { Link } from 'react-router-dom';
import logo from '../../assets/logo-grey.svg';
import FooterLinks from '../Footer/FooterLinks/FooterLinks';
import NavBar from '../NavBar/NavBar';
import './BurgerMenu.scss';

function BurgerMenu() {
  return (
    <div id="BurgerMenu">
      <div className="BurgerMenu">
        <div className="BurgerMenu-container">
          <Link className="BurgerMenu-logo" to="/">
            <img src={logo} alt="watizat logo" />
          </Link>
          <div className="BurgerMenu-navbar">
            <NavBar />
            <FooterLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
