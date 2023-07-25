import { useEffect } from 'react';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../assets/logo.svg';
import Header from '../Header/Header';
import './App.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getUserDataFromLocalStorage } from '../../../utils/user';
import { setIsLogged } from '../../../store/reducers/user';

function App() {
  const dispatch = useAppDispatch();
  const user = getUserDataFromLocalStorage();
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const { pathname } = useLocation();

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
      <div id="bo-app">
        <Sidebar />

        <main
          id={`${pathname !== '/admin/dashboard' ? 'bo-main' : 'dashboard'}`}
        >
          {pathname !== '/admin/dashboard' && <Header />}
          <Outlet />
        </main>
      </div>

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
