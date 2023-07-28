import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchCategories } from '../../../store/reducers/organisms';
import { setIsLogged } from '../../../store/reducers/user';
import { getUserDataFromLocalStorage } from '../../../utils/user';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './App.scss';

function App() {
  const isTablet = useMediaQuery({ query: '(min-width: 769px)' });
  const dispatch = useAppDispatch();
  const user = getUserDataFromLocalStorage();
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setIsLogged({ isLogged: user?.isLogged || false }));
  }, [isLogged, dispatch, user?.isLogged]);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (pathname === '/admin') {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <>
      {isTablet && (
        <div id="bo-app">
          <Sidebar />

          <main
            id={`${pathname !== '/admin/dashboard' ? 'bo-main' : 'dashboard'}`}
          >
            {pathname !== '/admin/dashboard' && <Header />}
            <Outlet />
          </main>
        </div>
      )}

      <div id="mobileOut">
        <Link className="mobileOut__logo" to="/">
          <img src={logo} alt="watizat logo" />
        </Link>
        <p>
          Cet espace n&apos;est pas adapté pour une consultation depuis un
          terminal de type smartphone
          <br />
          <br /> Merci de bien vouloir le consulter à nouveau depuis une
          tablette ou ordinateur
          <br />
          <br /> Promis, ceci n&apos;est pas un caprice de dévellopeur.se 🤪
        </p>
        <Link className="mobileOut__returnToHome" to="/">
          <p>Retourner vers la page d&apos;accueil</p>
        </Link>
      </div>
    </>
  );
}

export default App;
