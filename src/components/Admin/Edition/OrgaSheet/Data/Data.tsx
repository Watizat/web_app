import { useState } from 'react';
import { useAppSelector } from '../../../../../hooks/redux';
import ModalEditData from '../../../Modal/ModalEditData';
import Schedules from '../../../Schedules/Schedules';
import './Data.scss';

function Data() {
  const organism = useAppSelector((state) => state.admin.organism);
  const [isActive, setIsActive] = useState(false);
  if (organism === null) {
    return <span>Erreur</span>;
  }

  return (
    <article className="orgaSheet-card orgaSheet-data">
      {isActive && (
        <ModalEditData setIsActive={setIsActive} organism={organism} />
      )}

      <span className="orgaSheet-card__titleBar">
        <h3 className="orgaSheet-card__title">Informations génerales</h3>
        <button
          type="button"
          className="orgaSheet-card__menu"
          onClick={() => setIsActive(true)}
        >
          <i className="las la-edit" />
        </button>
      </span>

      <ul className="orgaSheet-data__list">
        <li className="orgaSheet-case orgaSheet-data__access">
          <h4>Accés</h4>
          <div className="orgaSheet-data__accessDetails">
            <label className="orgaSheet-data__pmr">
              <input type="checkbox" disabled checked={organism.pmr} />
              Accessible PSH /PMR
            </label>
            <label className="orgaSheet-data__pmr">
              <input type="checkbox" disabled checked={organism.animals} />
              Animaux admis
            </label>
          </div>
        </li>
        <li className="orgaSheet-case">
          <h4>Description</h4>
          <p>{organism.translations[0]?.description}</p>
        </li>
        <li className="orgaSheet-case orgaSheet-data__hours">
          <h4>Horaires</h4>
          <div className="orgaSheet-data__hoursDetails">
            {organism.schedules && organism.schedules.length > 0 ? (
              <Schedules schedule={organism.schedules} displayAll />
            ) : (
              <p style={{ color: 'red' }}>
                Il n&apos;y a pas d&apos;horaires enregistrés.
              </p>
            )}
          </div>
        </li>
        <li className="orgaSheet-case">
          <h4>Infos, alerte</h4>
          <p>{organism.translations[0]?.infos_alerte}</p>
        </li>
      </ul>
    </article>
  );
}

export default Data;
