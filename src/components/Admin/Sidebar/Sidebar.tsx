import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../../assets/logo.svg';
import Container from '../../Container/Container';
import NavBar from './NavBar/NavBar';
import './Sidebar.scss';

function Sidebar() {
  const [select, setSelect] = useState(localStorage.getItem('city') || '');

  return (
    <header className="adminsidebar">
      <Container>
        <div className="adminsidebar-logo">
          <Link className="adminsidebar-logo--img" to="/">
            <img src={logo} alt="watizat logo" />
          </Link>
        </div>
        <div className="adminsidebar-area">
          <select value={select}>
            <option value="" disabled>
              Selectionner une ville
            </option>
            <option value="toulouse">Toulouse</option>
            <option value="paris">Paris</option>
          </select>
        </div>
        <NavBar />
      </Container>
    </header>
  );
}

export default Sidebar;
