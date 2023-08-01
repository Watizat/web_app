import { Link } from 'react-router-dom';
import logo from '../../assets/logo-grey.svg';
import FooterLinks from '../Footer/FooterLinks/FooterLinks';
import NavBar from '../NavBar/NavBar';
import './BurgerMenu.scss';

interface ModalProps {
  MenuSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function BurgerMenu({ MenuSetOpen }: ModalProps) {
  return (
    <div id="BurgerMenu">
      <div className="BurgerMenu">
        <div className="BurgerMenu-container">
          <Link className="BurgerMenu-logo" to="/">
            <img src={logo} alt="watizat logo" />
          </Link>
          <div className="BurgerMenu-navbar">
            <NavBar MenuSetOpen={MenuSetOpen} />
            <FooterLinks MenuSetOpen={MenuSetOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
