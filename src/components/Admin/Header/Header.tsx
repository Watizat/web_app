import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import ModalUsers from '../Modal/ModalUsers';
import './Header.scss';

function Header() {
  const { pathname } = useLocation();
  const [isActiveUsers, setIsActiveUsers] = useState(false);

  return (
    <header id="headerAdmin">
      {isActiveUsers && <ModalUsers setIsActive={setIsActiveUsers} />}
      <h2>
        {pathname === '/admin/edition' && 'Edition des données'}
        {pathname === '/admin/users' && 'Gestion des utilisateur·ices'}
      </h2>

      {pathname === '/admin/users' && (
        <button
          type="button"
          className="btn btn-sucess btn-rounded btn-flat"
          onClick={() => setIsActiveUsers(true)}
        >
          Ajouter un·e utilisateur·ice
        </button>
      )}
    </header>
  );
}

export default Header;
