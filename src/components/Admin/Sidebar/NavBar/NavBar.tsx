import { Link } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <ul className="adminnav">
      <Link to="/admin" className="adminnav-isactive">
        <i className="las la-igloo" />
        <li>Dashboard</li>
      </Link>
      <Link to="/admin/edition">
        <i className="las la-pen-fancy" />
        <li>Edition des données</li>
      </Link>
      <Link to="#">
        <i className="las la-globe-africa" />
        <li>Espace traduction</li>
      </Link>
      <Link to="#">
        <i className="las la-mail-bulk" />
        <li>Actualisation</li>
      </Link>
      <Link to="#">
        <i className="las la-drafting-compass" />
        <li>Extraction guides</li>
      </Link>
      <Link to="/admin/users">
        <i className="las la-user-secret" />
        <li>Utilisateteur·ice·s</li>
      </Link>
      <Link to="https://watizat.lunalink.nl" target="_blank">
        <i className="las la-carrot" />
        <li>Directus (backend)</li>
      </Link>
      <Link to="#">
        <i className="las la-space-shuttle" />
        <li>Se déconnecter</li>
      </Link>
    </ul>
  );
}

export default NavBar;
