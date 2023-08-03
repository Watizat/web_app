import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchZones } from '../../../store/reducers/admin';
import Container from '../../Container/Container';
import NavBar from './NavBar/NavBar';
import './Sidebar.scss';
import { changeCity } from '../../../store/reducers/user';

function Sidebar() {
  const [select, setSelect] = useState(localStorage.getItem('city') || '');
  const isAdmin = useAppSelector((state) => state.user.isAdmin);
  const dispatch = useAppDispatch();
  const zones = useAppSelector((state) => state.admin.zones);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('city', event.target.value);
    setSelect(event.target.value);
    dispatch(changeCity(event.target.value));
  };

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
          <h4 className="adminsidebar-myInfos__title">Antenne locale</h4>
          <label className="adminsidebar-myInfos__zone">
            <select
              value={select}
              onChange={handleChange}
              className="adminsidebar-myInfos__zone-select"
              disabled={!isAdmin}
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
        </div>
        <NavBar />
      </Container>
    </header>
  );
}

export default Sidebar;
