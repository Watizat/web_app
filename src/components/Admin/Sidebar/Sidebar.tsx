import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import Container from '../../Container/Container';
import NavBar from './NavBar/NavBar';
import './Sidebar.scss';

function Sidebar() {
  return (
    <header className="adminsidebar">
      <Container>
        <div className="adminsidebar-logo">
          <Link className="adminsidebar-logo--img" to="/">
            <img src={logo} alt="watizat logo" />
          </Link>
        </div>
        <NavBar />
      </Container>
    </header>
  );
}

export default Sidebar;
