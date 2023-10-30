import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { toggleHamburger } from '../../store/reducers/hamburger';
import { getUserDataFromLocalStorage } from '../../utils/user';
import links from './linksData';

export default function Links() {
  const dispatch = useAppDispatch();
  const user = getUserDataFromLocalStorage();

  // Utilise des informations présentes dans le fichier js/linksData.js
  // eslint-disable-next-line unused-imports/no-unused-vars
  const handleLinkClick = () => {
    dispatch(toggleHamburger(false));
  };

  return (
    <div className="flex gap-2.5">
      {links.map((e) => (
        <Link
          key={e.name}
          className="flex items-center justify-center px-3 py-2 my-auto transition delay-75 rounded duration-50 hover:no-underline hover:bg-watizat-600/10"
          to={
            e.needUser ? `${user ? '/admin/dashboard' : '/login'}` : e.to || '/' // Si user authentifié alors redirection vers dashboard sinon vers login page
          }
          target={e.target} // Si lien vers page exterieur pour ouverture nouvel onglet
        >
          {e.name}
        </Link>
      ))}
    </div>
  );
}
