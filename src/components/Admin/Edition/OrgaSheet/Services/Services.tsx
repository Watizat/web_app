import { useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import ContactCard from '../ContactCard/ContactCard';
import ModalService from '../../../Modal/ModalService';
import ModalContact from '../../../Modal/ModalContact';
import './Services.scss';

function Services({ services }) {
  const [isActiveService, setIsActiveService] = useState(false);
  return (
    <article className="orgaSheet-card orgaSheet-services">
      {isActiveService && <ModalService setIsActive={setIsActiveService} />}

      <span className="orgaSheet-card__titleBar">
        <h3 className="orgaSheet-card__title">Services disponibles</h3>
        <button
          type="button"
          className="orgaSheet-card__menu"
          onClick={() => setIsActiveService(true)}
        >
          <i className="las la-plus-circle" />
        </button>
      </span>

      <ul className="orgaSheet-services__list">
        {services.map((e) => (
          <ServiceCard
            key={`services${e.id}`}
            name={e.name}
            description={e.description}
            hours={e.hours}
            infos_alerte={e.infos_alerte}
            contacts={e.contacts}
          />
        ))}
      </ul>
    </article>
  );
}

export default Services;
