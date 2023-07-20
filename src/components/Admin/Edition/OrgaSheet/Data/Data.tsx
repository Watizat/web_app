import { useState } from 'react';
import Modal from '../../../Modal/ModalData';
import './Data.scss';

function Data({ pmr, animals, description, hours, infos_alertes }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <article className="orgaSheet-card orgaSheet-data">
      {isActive && <Modal setIsActive={setIsActive} />}

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
              {pmr ? (
                <input type="checkbox" disabled checked />
              ) : (
                <input type="checkbox" disabled />
              )}
              Accessible PSH /PMR
            </label>
            <label className="orgaSheet-data__pmr">
              {animals ? (
                <input type="checkbox" disabled checked />
              ) : (
                <input type="checkbox" disabled />
              )}
              Animaux admis
            </label>
          </div>
        </li>
        <li className="orgaSheet-case">
          <h4>Description</h4>
          <p>{description}</p>
        </li>
        <li className="orgaSheet-case orgaSheet-data__hours">
          <h4>Horaires</h4>
          <div className="orgaSheet-data__hoursDetails">
            {hours.map((e) => (
              <p key={e.name}>
                <span
                  className={
                    e.day === 6 || e.day === 7
                      ? 'orgaSheet-data__daysOff'
                      : 'orgaSheet-data__daysOn'
                  }
                >
                  {e.name}
                </span>
                {`${e.open_am} - ${e.close_am} / ${e.open_pm} - ${e.close_pm}`}
              </p>
            ))}
          </div>
        </li>
        <li className="orgaSheet-case">
          <h4>Infos, alerte</h4>
          <p>{infos_alertes}</p>
        </li>
      </ul>
    </article>
  );
}

export default Data;
