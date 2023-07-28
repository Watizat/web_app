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
        <div className="adminsidebar-myInfos">
          <h4 className="adminsidebar-myInfos__title">Mes informations</h4>
          <label className="adminsidebar-myInfos__zone">
            <select
              value={select}
              onChange={handleChange}
              className="adminsidebar-myInfos__zone-select"
            >
              <option
                value=""
                disabled
                className="adminsidebar-myInfos__zone-select__default"
              >
                Selectionner une ville
              </option>
              {zones.map((zone) => (
                <option
                  key={zone.id}
                  value={zone.name}
                  className="adminsidebar-myInfos__zone-select__option"
                >
                  {zone.name}
                </option>
              ))}
            </select>
          </label>
          <Link className="adminsidebar-myInfos__link" to="/admin/account">
            <p>Accéder à mon compte</p>
          </Link>
        </div>
        <NavBar />
      </Container>
    </header>
  );
}

export default Sidebar;
