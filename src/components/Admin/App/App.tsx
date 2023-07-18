import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../assets/logo.svg';
import './App.scss';

function App() {
  return (
    <>
      <div id="bo-app">
        <Sidebar />
        <Outlet />
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
          <br /> Promis, ceci n&apos;est pas un caprice de dévellopeur.se 🤪
        </p>
        <Link className="mobileout__returnToHome" to="/">
          <p>Retourner vers la page d&apos;accueil</p>
        </Link>
      </div>
    </>
  );
}

export default App;
