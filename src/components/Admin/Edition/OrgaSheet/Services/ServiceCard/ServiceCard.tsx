import { useState } from 'react';
import { Service } from '../../../../../../@types/organism';
import ModalAddServiceContact from '../../../../Modal/ModalAddServiceContact';
import ModalEditService from '../../../../Modal/ModalEditService';
import Schedules from '../../../../Schedules/Schedules';
import ContactCard from '../../Contacts/ContactCard/ContactCard';
import './ServiceCard.scss';

function ServiceCard({ ...service }: Service) {
  const [isActiveService, setIsActiveService] = useState(false);
  const [isActiveContact, setIsActiveContact] = useState(false);

  return (
    <li className="orgaSheet-services__serviceCard">
      {isActiveService && (
        <ModalEditService setIsActive={setIsActiveService} service={service} />
      )}
      {isActiveContact && (
        <ModalAddServiceContact
          setIsActive={setIsActiveContact}
          service={service}
        />
      )}
      <span className="serviceCard-header">
        <h4 className="serviceCard-subheader">
          {service.translations[0]?.name}
        </h4>
        <span className="serviceCard-actions">
          <button
            type="button"
            className="orgaSheet-edition__menu"
            onClick={() => setIsActiveContact(true)}
          >
            <i className="las la-address-book" />
          </button>
          <button
            type="button"
            className="orgaSheet-edition__menu"
            onClick={() => setIsActiveService(true)}
          >
            <i className="las la-edit" />
          </button>
        </span>
      </span>
      <div className="serviceCard-data">
        <p className="serviceCard-data__info">
          Categorie : {service.categorie_id.translations[0]?.name}
        </p>
        <p className="serviceCard-data__info">
          {service.translations[0]?.description}
        </p>
        {service.schedules && service.schedules.length > 0 ? (
          <Schedules schedule={service.schedules} />
        ) : (
          <p style={{ color: 'red' }}>
            Il n&apos;y a pas d&apos;horaires enregistrés.
          </p>
        )}
        <p className="serviceCard-data__alerts">
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
