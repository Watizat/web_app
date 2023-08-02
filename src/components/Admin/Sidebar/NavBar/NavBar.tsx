import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/redux';
import { toggleHamburger } from '../../../../store/reducers/hamburger';
import { logout } from '../../../../store/reducers/user';
import './NavBar.scss';

function NavBar() {
  const dispatch = useAppDispatch();

  const links = [
    {
      name: 'Dashboard',
      to: '/admin/dashboard',
      icon: 'las la-shapes',
      active: true,
    },
    {
      name: 'Mon compte',
      to: '/admin/account',
      icon: 'las la-asterisk',
      active: true,
    },
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

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="adminNav">
      {links.map((e) => (
        <NavLink
          key={e.name}
          to={e.to}
          onClick={() => dispatch(toggleHamburger(false))}
          className={({ isActive }) =>
            isActive
              ? 'adminNav-isActive'
              : `${e.active ? '' : 'adminNav-forbidden'}`
          }
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
