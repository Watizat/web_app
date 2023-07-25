import { useState } from 'react';
import { useAppSelector } from '../../../../../hooks/redux';
import ModalInfos from '../../../Modal/ModalInfos';
import './Infos.scss';

function Infos() {
  const [isActive, setIsActive] = useState(false);
  const organism = useAppSelector((state) => state.admin.organism);

  if (organism === null) {
    return <span>Une erreur s&apos;est produite.</span>;
  }

  return (
    <article className="orgaSheet-card orgaSheet-infos">
      {isActive && <ModalInfos setIsActive={setIsActive} organism={organism} />}

      <span className="orgaSheet-infos__titleBar">
        <h1>{organism.name}</h1>
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
          <p>{organism.address}</p>
        </li>
        <li className="orgaSheet-case">
          <h4>Ville</h4>
          <p>{organism.city}</p>
        </li>
        <li className="orgaSheet-case">
          <h4>Code postal</h4>
          <p>{organism.zipcode}</p>
        </li>
        <li className="orgaSheet-case">
          <h4>Site web</h4>
          <p>{organism.website}</p>
        </li>
      </ul>
    </article>
  );
}

export default Infos;
