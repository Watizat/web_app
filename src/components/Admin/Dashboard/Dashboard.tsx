import { Link } from 'react-router-dom';
import './Dashboard.scss';

function Dashboard() {
  const links = [
    {
      name: 'Edition des données',
      to: '/admin/edition',
      icon: 'las la-pen-fancy',
      state: '',
    },
    {
      name: 'Espace traduction',
      to: '/admin/translate',
      icon: 'las la-globe-africa',
      state: 'is-inactive',
    },
    {
      name: 'Actualisation',
      to: '/admin/actualisation',
      icon: 'las la-mail-bulk',
      state: 'is-inactive',
    },
    {
      name: 'Extraction guides',
      to: '/admin/guides',
      icon: 'las la-drafting-compass',
      state: 'is-inactive',
    },
    {
      name: 'Utilisateteur·ice·s',
      to: '/admin/users',
      icon: 'las la-user-secret',
      state: '',
    },
    {
      name: 'Directus (backend)',
      to: 'https://watizat.lunalink.nl',
      target: '_blank',
      icon: 'las la-carrot',
      state: '',
    },
  ];

  return (
    <>
      <h1>Dashboard</h1>
      <ul className="dashboardLinks">
        {links.map((e) => (
          <Link key={e.name} to={e.to} target={e.target}>
            <li className={`dashboardLinks-card ${e.state}`}>
              <div className="dashboardLinks-card__logo">
                <i className={e.icon} />
              </div>
              <p className="dashboardLinks-card__text">{e.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Dashboard;
