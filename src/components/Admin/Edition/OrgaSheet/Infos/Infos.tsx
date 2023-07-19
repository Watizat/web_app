import { useState } from 'react';
import Modal from '../Modal/ModalInfos';
import './Infos.scss';

function Infos() {
  const [isActive, setIsActive] = useState(false);

  return (
    <article className="orgaSheet-card orgaSheet-infos">
      {isActive && <Modal setIsActive={setIsActive} />}

      <span className="orgaSheet-infos__titleBar">
        <h1>Informations organisme</h1>
        <button
          type="button"
          className="orgaSheet-infos__menu"
          onClick={() => setIsActive(true)}
        >
          <i className="las la-bars" />
        </button>
      </span>

      <ul className="orgaSheet-infos__list">
        <li className="orgaSheet-case">
          <h4>Organisme</h4>
          <p>
            Croix rouge française de l&apos;apostolque de machin truc (antenne
            sud)
          </p>
        </li>
        <li className="orgaSheet-case">
          <h4>Adresse</h4>
          <p>66 rue de l&apos;ambassadeur de la petite provence</p>
        </li>
        <li className="orgaSheet-case">
          <h4>Ville</h4>
          <p>Toulouse</p>
        </li>
        <li className="orgaSheet-case">
          <h4>Code postal</h4>
          <p>31500</p>
        </li>
      </ul>
    </article>
  );
}

export default Infos;
