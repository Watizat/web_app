import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchZones } from '../../../store/reducers/admin';
import Container from '../../Container/Container';
import NavBar from './NavBar/NavBar';
import './Sidebar.scss';

function Sidebar() {
  const [select, setSelect] = useState(localStorage.getItem('city') || '');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('city', event.target.value);
    setSelect(event.target.value);
  };

  const dispatch = useAppDispatch();
  const zones = useAppSelector((state) => state.admin.zones);

  useEffect(() => {
    dispatch(fetchZones());
  }, [dispatch]);

  return (
    <header className="adminsidebar">
      <Container>
        <div className="adminsidebar-logo">
          <Link className="adminsidebar-logo--img" to="/">
            <img src={logo} alt="watizat logo" />
          </Link>
        </div>
        <div className="adminsidebar-area">
          <select value={select} onChange={handleChange}>
            <option value="" disabled>
              Selectionner une ville
            </option>
            {zones.map((zone) => (
              <option key={zone.id} value={zone.name}>
                {zone.name}
              </option>
            ))}
          </select>
        </div>
        <NavBar />
      </Container>
    </header>
  );
}

export default Sidebar;
