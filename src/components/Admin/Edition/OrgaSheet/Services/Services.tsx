import { useState } from 'react';
import { useAppSelector } from '../../../../../hooks/redux';
import ModalAddService from '../../../Modal/ModalAddService';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.scss';

function Services() {
  const [isActiveService, setIsActiveService] = useState(false);
  const organism = useAppSelector((state) => state.admin.organism);
  const services = organism?.services;
  return (
    <article className="orgaSheet-card orgaSheet-services">
      {isActiveService && <ModalAddService setIsActive={setIsActiveService} />}
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
        {services && services.length > 0 ? (
          services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))
        ) : (
          <span>Pas de services</span>
        )}
      </ul>
    </article>
  );
}

export default Services;
