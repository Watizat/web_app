import { useState } from 'react';
import Modal from '../../../Modal/ModalInfos';
import './Infos.scss';

function Infos({ name, address, city, zipcode, website }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <article className="orgaSheet-card orgaSheet-infos">
      {isActive && (
        <Modal
          setIsActive={setIsActive}
          name={name}
          address={address}
          city={city}
          zipcode={zipcode}
          website={website}
        />
      )}

      <span className="orgaSheet-infos__titleBar">
        <h1>{name}</h1>
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
        <li className="orgaSheet-case">
          <h4>Site web</h4>
          <p>{website}</p>
        </li>
      </ul>
    </article>
  );
}

export default Infos;
