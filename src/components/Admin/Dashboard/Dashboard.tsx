import { Link } from 'react-router-dom';
import styles from './Dashboard.module.scss';

function Dashboard() {
  const links = [
    {
      name: 'Edition des données',
      to: '/admin/edition',
      icon: 'las la-paragraph',
      active: true,
    },
    {
      name: 'Espace traduction',
      to: '/admin/translate',
      icon: 'las la-globe-africa',
      active: false,
    },
    {
      name: 'Actualisation',
      to: '/admin/actualisation',
      icon: 'las la-mail-bulk',
      active: false,
    },
    {
      name: 'Extraction guides',
      to: '/admin/guides',
      icon: 'las la-drafting-compass',
      active: false,
    },
    {
      name: 'Utilisateteur·ice·s',
      to: '/admin/users',
      icon: 'las la-user-friends',
      active: true,
    },
    {
      name: 'Directus (backend)',
      to: 'https://watizat.lunalink.nl',
      target: '_blank',
      icon: 'las la-carrot',
      active: true,
    },
  ];

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <ul className={styles.links}>
        {links.map((e) => (
          <Link
            key={e.name}
            to={e.to}
            target={e.target}
            className={`${e.active ? '' : styles.links_forbidden}`}
          >
            <li className={styles.links_card}>
              <div className={styles.links_card__logo}>
                <i className={e.icon} />
              </div>
              <p className={styles.lins_card__text}>{e.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
