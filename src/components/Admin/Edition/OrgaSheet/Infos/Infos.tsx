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
          <h4 className="orgaSheet-infos__list___title">Adresse</h4>
          <p className="orgaSheet-infos__list___text">{organism.address}</p>
        </li>
        <li className="orgaSheet-case">
          <h4 className="orgaSheet-infos__list___title">Ville</h4>
          <p className="orgaSheet-infos__list___text">{organism.city}</p>
        </li>
        <li className="orgaSheet-case">
          <h4 className="orgaSheet-infos__list___title">Code postal</h4>
          <p className="orgaSheet-infos__list___text">{organism.zipcode}</p>
        </li>
        <li className="orgaSheet-case">
          <h4 className="orgaSheet-infos__list___title">Site web</h4>
          <p className="orgaSheet-infos__list___text">{organism.website}</p>
        </li>
      </ul>
    </article>
  );
}

export default Infos;
