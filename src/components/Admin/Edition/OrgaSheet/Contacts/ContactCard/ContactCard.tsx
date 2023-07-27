import { useState } from 'react';
import { Contact } from '../../../../../../@types/organism';
import Modal from '../../../../Modal/ModalContact';
import './ContactCard.scss';

function ContactCard({ ...contact }: Contact) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="orgaSheet-case orgaSheet-contact">
      {isActive && <Modal setIsActive={setIsActive} contact={contact} />}
      <div className="orgaSheet-contact__header">
        <div className="orgaSheet-contact__subheader">
          <h5 className="orgaSheet-contact__subheader___title">
            {contact.name}
          </h5>
          <div className="contacts-roles">
            {contact.actualisation ? (
              <span className="contacts-roles__role contacts-roles__actualisation">
                Actualisation
              </span>
            ) : null}
            {contact.visibility === false ? (
              <span className="contacts-roles__role contacts-roles__prive">
                Privé
              </span>
            ) : (
              <span className="contacts-roles__role contacts-roles__public">
                Public
              </span>
            )}
          </div>
        </div>
        <button
          type="button"
          className="orgaSheet-edition__menu"
          onClick={() => setIsActive(true)}
        >
          <i className="las la-ellipsis-h" />
        </button>
      </div>
      <div className="orgaSheet-contact__details">
        <div className="orgaSheet-contact__details___infos">
          <p className="orgaSheet-contact__details___infos-job">
            {contact.job}
          </p>
          <p className="orgaSheet-contact__details___infos-phone">
            {contact.phone}
          </p>
        </div>
        <div className="orgaSheet-contact__details___infos">
          <p className="orgaSheet-contact__details___infos-mail">
            {contact.mail}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
