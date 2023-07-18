import { Link, Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../assets/logo.svg';
import './App.scss';
import Header from '../Header/Header';

function App() {
  const { pathname } = useLocation();

  return (
    <span>
      <div id="bo-app">
        <Sidebar />

        {pathname !== '/admin' && (
          <main id="bo-main">
            <Header />
            <Outlet />
          </main>
        )}

        {pathname === '/admin' && <Outlet />}
      </div>
      <div id="mobileout">
        <Link className="mobileout__logo" to="/">
          <img src={logo} alt="watizat logo" />
        </Link>
        <p>
          Cet espace n&apos;est pas adaptée pour une consultation sur mobile
          <br />
          <br /> Merci de bien vouloir le consulter à nouveau depuis un
          ordinateur ou une tablette
          <br />
          <br /> Promis, ceci n'est pas un caprice de dévellopeur.se 🤪
        </p>
        <Link className="mobileout__returnToHome" to="/">
          <p>Retourner vers la page d'accueil</p>
        </Link>
      </div>
    </span>
  );
}

export default App;
