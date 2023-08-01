import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { toggleHamburger } from '../../../store/reducers/hamburger';
import ModalAddOrganism from '../Modal/ModalAddOrganism';
import Sidebar from '../Sidebar/Sidebar';
import './Header.scss';

function Header() {
  const { pathname } = useLocation();
  const [isActiveOrganism, setIsActiveOrganism] = useState(false);
  const isOpen = useAppSelector((state) => state.hamburger.isOpen);
  const dispatch = useAppDispatch();

  return (
    <header id="headerAdmin">
      {isActiveOrganism && (
        <ModalAddOrganism setIsActive={setIsActiveOrganism} />
      )}

      {!isOpen && (
        <div className="headerAdmin-hamburger">
          <Hamburger
            size={27}
            toggled={isOpen}
            toggle={() => dispatch(toggleHamburger(!isOpen))}
          />
        </div>
      )}
      {isOpen && (
        <span className="headerAdmin-sidebar">
          <Sidebar />
        </span>
      )}

      {isOpen && (
        <div className="headerAdmin-hamburger headerAdmin-hamburger__open">
          <Hamburger
            size={27}
            toggled={isOpen}
            toggle={() => dispatch(toggleHamburger(!isOpen))}
          />
        </div>
      )}
      <h2>
        {pathname === '/admin/edition' && 'Edition des données'}
        {pathname === '/admin/users' && 'Gestion des utilisateur·ices'}
      </h2>

      {pathname === '/admin/edition' && (
        <button
          type="button"
          className="btn btn-sucess btn-rounded btn-flat"
          onClick={() => setIsActiveOrganism(true)}
        >
          Ajouter un organisme
        </button>
      )}
    </header>
  );
}

export default Header;
