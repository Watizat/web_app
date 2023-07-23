import { useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import ModalService from '../../../Modal/ModalService';
import './Services.scss';

function Services({ services }: any) {
  const [isActiveService, setIsActiveService] = useState(false);
  return (
    console.log(services),
    (
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
          {services.map((service: any) => (
            <ServiceCard
              key={`services${service.id}`}
              name={service.translations[0].name}
              categories={service.categorie_id.translations[0].name}
              description={service.translations[0].description}
              schedules={service.schedules}
              infos_alerte={service.translations[0].infos_alerte}
              contacts={service.contacts}
            />
          ))}
        </ul>
      </article>
    )
  );
}

export default Services;
