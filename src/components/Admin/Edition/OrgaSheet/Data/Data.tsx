import { useState } from 'react';
import Modal from '../Modal/ModalData';
import './Data.scss';

function Data() {
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
          <i className="las la-bars" />
        </button>
      </span>

      <ul className="orgaSheet-data__list">
        <li className="orgaSheet-case orgaSheet-data__access">
          <h4>Accés</h4>
          <div className="orgaSheet-data__accessDetails">
            <label className="orgaSheet-data__pmr">
              <input type="checkbox" />
              Accessible PSH /PMR
            </label>
            <label className="orgaSheet-data__animals">
              <input type="checkbox" />
              Animaux admis
            </label>
          </div>
        </li>
        <li className="orgaSheet-case">
          <h4>Description</h4>
          <p>
            Écoute, renseignement et orientation pour les personnes sans
            domicile fixe n’ayant pas de référent social. Service social public
            qui apporte une aide ponctuelle sur les besoins de première
            nécessité et l&apos;accès aux droits. Pour assurer un suivi, une
            orientation vers un référent social aura lieu.
          </p>
        </li>
        <li className="orgaSheet-case orgaSheet-data__hours">
          <h4>Horaires</h4>
          <div className="orgaSheet-data__hoursDetails">
            <p>
              <span className="orgaSheet-data__daysOn">Lundi</span>9h-12h /
              14h-16h
            </p>
            <p>
              <span className="orgaSheet-data__daysOn">Mardi</span>9h-12h /
              14h-16h
            </p>
            <p>
              <span className="orgaSheet-data__daysOn">Mercredi</span>9h-12h /
              14h-16h
            </p>
            <p>
              <span className="orgaSheet-data__daysOn">Jeudi</span>9h-12h /
              14h-16h
            </p>
            <p>
              <span className="orgaSheet-data__daysOn">Vendredi</span>9h-12h /
              14h-16h
            </p>
            <p>
              <span className="orgaSheet-data__daysOff">Samedi</span>Fermé
            </p>
            <p>
              <span className="orgaSheet-data__daysOff">Dimanche</span>Fermé
            </p>
          </div>
        </li>
        <li className="orgaSheet-case">
          <h4>Infos, alerte</h4>
          <p>
            Fermeture le troisième dimanche de la quatrième année du calendrier
            maya postcolonial si y&apos;a pas grève à la SNCF
          </p>
        </li>
      </ul>
    </article>
  );
}

export default Data;
