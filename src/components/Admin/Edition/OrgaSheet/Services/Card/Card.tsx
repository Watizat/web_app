import { useState } from 'react';
import { Service } from '../../../../../../@types/organism';
import ModalAddServiceContact from '../../../../../OldModals/ModalAddServiceContact';
import ModalEditService from '../../../../../OldModals/ModalEditService';
import Schedules from '../../../../Schedules/Schedules';
import ContactCard from '../../Contacts/Card/Card';
import styles from './Card.module.scss';
import orgasheet from '../../OrgaSheet.module.scss';

function ServiceCard({ ...service }: Service) {
  const [isActiveService, setIsActiveService] = useState(false);
  const [isActiveContact, setIsActiveContact] = useState(false);

  return (
    <li className={styles.service_card}>
      {isActiveService && (
        <ModalEditService setIsActive={setIsActiveService} service={service} />
      )}
      {isActiveContact && (
        <ModalAddServiceContact
          setIsActive={setIsActiveContact}
          service={service}
        />
      )}
      <span className={styles.serviceCard_header}>
        <h4 className={styles.serviceCard_subheader}>
          {service.translations[0]?.name}
        </h4>
        <span className={styles.serviceCard_actions}>
          <button
            type="button"
            className={styles.serviceCard_menu}
            onClick={() => setIsActiveContact(true)}
          >
            <i className="las la-address-book" />
          </button>
          <button
            type="button"
            className={styles.serviceCard_menu}
            onClick={() => setIsActiveService(true)}
          >
            <i className="las la-edit" />
          </button>
        </span>
      </span>
      <div className={styles.serviceCard_data}>
        <p className={styles.serviceCard_data__info}>
          {service.translations[0]?.description}
        </p>
        <p className={styles.serviceCard_data__category}>
          {service.categorie_id.translations[0]?.name}
        </p>
        {service.schedules && service.schedules.length > 0 ? (
          <Schedules schedule={service.schedules} displayAll={false} />
        ) : (
          <p style={{ color: 'red' }}>
            Il n&apos;y a pas d&apos;horaires enregistrés.
          </p>
        )}
        <p className={styles.serviceCard_data__alerts}>
          {service.translations[0]?.infos_alerte}
        </p>
        {service.contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </li>
  );
}

export default ServiceCard;
