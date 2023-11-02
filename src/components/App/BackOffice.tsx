/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Header from '../Header/Backend';
import Sidebar from '../Admin/Sidebar/Sidebar';
import styles from './App.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchRoles, fetchZones } from '../../store/reducers/admin';
import { fetchCategories, fetchDays } from '../../store/reducers/organisms';
import { axiosInstance } from '../../utils/axios';
import { getUserDataFromLocalStorage } from '../../utils/user';
import { changeAdmin } from '../../store/reducers/user';

function App() {
  const isTablet = useMediaQuery({ query: '(min-width: 769px)' });
  const isWidescreen = useMediaQuery({ query: '(min-width: 1216px)' });
  const dispatch = useAppDispatch();
  const user = getUserDataFromLocalStorage();
  const { pathname } = useLocation();
  const langue = useAppSelector((state) => state.organism.langue);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isOpen = useAppSelector((state) => state.hamburger.isOpen);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDays(1));
  }, [dispatch, langue]);

  useEffect(() => {
    dispatch(fetchZones());
    dispatch(fetchRoles());
  }, [dispatch]);

  useEffect(() => {
    async function check() {
      setIsLoading(true);
      const { data } = await axiosInstance.get('/users/me');

      if (data.data.role === '5754603f-add3-4823-9c77-a2f9789074fc') {
        setIsLoading(false);
        return navigate('/new-user');
      }
      if (data.data.role === '53de6ec2-6d70-48c8-8532-61f96133f139') {
        dispatch(changeAdmin(true));
      }
      setIsLoading(false);
      return <Navigate to="/admin/dashboard" replace />;
    }
    check();
  }, [navigate, dispatch]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (pathname === '/admin' || pathname === '/admin/') {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <>
      {!isLoading && (
        <>
          {isTablet ? (
            <div className={styles.boApp}>
              {(isWidescreen || isOpen) && <Sidebar />}

              <main
                className={`${styles.main} ${
                  pathname !== '/admin/dashboard' ? 'bo-main' : 'dashboard'
                }`}
              >
                {pathname !== '/admin/dashboard' && <Header />}
                <Outlet />
              </main>
            </div>
          ) : (
            <div className={styles.mobileOut}>
              <Link className={styles.mobileOut_logo} to="/">
                <img src={logo} alt="watizat logo" />
              </Link>
              <p>
                Cet espace n&apos;est pas adapté pour une consultation depuis un
                terminal de type smartphone
                <br />
                <br /> Merci de bien vouloir le consulter à nouveau depuis une
                tablette ou ordinateur
                <br />
                <br /> Promis, ceci n&apos;est pas un caprice de dévellopeur.se
                🤪
              </p>
              <Link className={styles.mobileOut_links} to="/">
                <p>Retourner vers la page d&apos;accueil</p>
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
