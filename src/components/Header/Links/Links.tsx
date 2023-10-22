import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { toggleHamburger } from '../../../store/reducers/hamburger';
import { getUserDataFromLocalStorage } from '../../../utils/user';
import styles from './Links.module.scss';
import links from './linksData';

function Links() {
  const dispatch = useAppDispatch();
  const user = getUserDataFromLocalStorage();

  const handleLinkClick = () => {
    dispatch(toggleHamburger(false));
  };

  // const links = [
  //   {
  //     name: 'Accueil',
  //     to: '/',
  //     onclick: handleLinkClick,
  //     mobile: true,
  //   },
  //   {
  //     name: 'Watizat.org',
  //     to: '/',
  //     target: '_blank',
  //     mobile: true,
  //   },
  //   {
  //     name: 'Membres Watizat',
  //     to: user ? '/admin/dashboard' : '/login',
  //     onclick: handleLinkClick,
  //   },
  // ];

  return (
    <div className={styles.links}>
      {links.map((e) => (
        <Link
          key={e.name}
          to={
            e.needUser ? `${user ? '/admin/dashboard' : '/login'}` : e.to || '/'
          }
          target={e.target}
        >
          {e.name}
        </Link>
      ))}
    </div>
  );
}

export default Links;
