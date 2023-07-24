import { Link, NavLink } from 'react-router-dom';
import './NavBar.scss';
import { useAppDispatch } from '../../../../hooks/redux';
import { logout } from '../../../../store/reducers/user';

function NavBar() {
  const dispatch = useAppDispatch();

  const links = [
    { name: 'Dashboard', to: '/admin/dashboard', icon: 'las la-igloo' },
    {
      name: 'Edition des données',
      to: '/admin/edition',
      icon: 'las la-pen-fancy',
    },
    {
      name: 'Espace traduction',
      to: '/admin/translate',
      icon: 'las la-globe-africa',
    },
    {
      name: 'Actualisation',
      to: '/admin/actualisation',
      icon: 'las la-mail-bulk',
    },
    {
      name: 'Extraction guides',
      to: '/admin/guides',
      icon: 'las la-drafting-compass',
    },
    {
      name: 'Utilisateteur·ice·s',
      to: '/admin/users',
      icon: 'las la-user-secret',
    },
    {
      name: 'Directus (backend)',
      to: 'https://watizat.lunapnk.nl',
      target: '_blank',
      icon: 'las la-carrot',
    },
    // {
    //   name: 'Se déconnecter',
    //   to: '/auth/logout',
    //   icon: 'las la-sign-out-alt',
    // },
  ];

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="adminNav">
      {links.map((e) => (
        <NavLink
          key={e.name}
          to={e.to}
          className={({ isActive }) => (isActive ? 'adminNav-isActive' : '')}
        >
          <i className={e.icon} />
          <li>{e.name}</li>
        </NavLink>
      ))}
      <Link to="/" onClick={handleLogout}>
        <i className="las la-sign-out-alt" />
        <li>Se déconnecter</li>
      </Link>
    </div>
  );
}

export default NavBar;
