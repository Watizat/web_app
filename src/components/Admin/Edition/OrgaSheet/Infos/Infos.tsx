import { useState } from 'react';
import Modal from '../../../Modal/ModalInfos';
import './Infos.scss';

function Infos({ name, address, city, zipcode }) {
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
          <i className="las la-edit" />
        </button>
      </span>

      <ul className="orgaSheet-infos__list">
        <li className="orgaSheet-case">
          <h4>Organisme</h4>
          <p>{name}</p>
        </li>
        <li className="orgaSheet-case">
          <h4>Adresse</h4>
          <p>{address}</p>
        </li>
        <li className="orgaSheet-case">
          <h4>Ville</h4>
          <p>{city}</p>
        </li>
        <li className="orgaSheet-case">
          <h4>Code postal</h4>
          <p>{zipcode}</p>
        </li>
      </ul>
    </article>
  );
}

export default Infos;
