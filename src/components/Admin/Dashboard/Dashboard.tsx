import { Link } from 'react-router-dom';
import Container from '../../Container/Container';
import './Dashboard.scss';

function Dashboard() {
  return (
    <main id="dashboard">
      <Container>
        <h1>Dashboard</h1>
        <ul className="panel">
          <Link to="/admin/edition">
            <li className="panel-card">
              <div className="panel-card--logo">
                <i className="las la-pen-fancy" />
              </div>
              <p className="panel-card--text">Edition de données</p>
            </li>
          </Link>
          <Link to="#">
            <li className="panel-card is-inactive">
              <div className="panel-card--logo">
                <i className="las la-globe-africa" />
              </div>
              <p className="panel-card--text">Espace traduction</p>
            </li>
          </Link>
          <Link to="#">
            <li className="panel-card is-inactive">
              <div className="panel-card--logo">
                <i className="las la-mail-bulk" />
              </div>
              <p className="panel-card--text">Demande d&apos;actualisation</p>
            </li>
          </Link>
          <Link to="#">
            <li className="panel-card is-inactive">
              <div className="panel-card--logo">
                <i className="las la-drafting-compass" />
              </div>
              <p className="panel-card--text">Extraction des guides</p>
            </li>
          </Link>
          <Link to="/admin/users">
            <li className="panel-card">
              <div className="panel-card--logo">
                <i className="las la-user-secret" />
              </div>
              <p className="panel-card--text">
                Gestion des utilisateteur·ice·s
              </p>
            </li>
          </Link>
          <Link to="https://watizat.lunalink.nl" target="_blank">
            <li className="panel-card">
              <div className="panel-card--logo">
                <i className="las la-carrot" />
              </div>
              <p className="panel-card--text">Directus (backend)</p>
            </li>
          </Link>
        </ul>
      </Container>
    </main>
  );
}

export default Dashboard;
