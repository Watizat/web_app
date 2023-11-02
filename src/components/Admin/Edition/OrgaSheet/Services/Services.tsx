import { useState } from 'react';
import { useAppSelector } from '../../../../../hooks/redux';
import ModalAddService from '../../../../Modals/ModalAddService';
import ServiceCard from './Card/Card';
import styles from './Services.module.scss';
import orgasheet from '../OrgaSheet.module.scss';

function Services() {
  const [isActiveService, setIsActiveService] = useState(false);
  const organism = useAppSelector((state) => state.admin.organism);
  const services = organism?.services;
  return (
    <article className={`${orgasheet.orgaSheet_card} ${styles.services}`}>
      {isActiveService && <ModalAddService setIsActive={setIsActiveService} />}
      <span className={orgasheet.orgaSheet_card__titleBar}>
        <h3 className={orgasheet.orgaSheet_card__title}>
          Services disponibles
        </h3>
        <button
          type="button"
          className={orgasheet.orgaSheet_card__menu}
          onClick={() => setIsActiveService(true)}
        >
          <i className="las la-plus-circle" />
        </button>
      </span>

      <ul className={styles.services_list}>
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
