import { useState } from 'react';
import { Contact } from '../../../../../@types/organism';
import Modal from '../../../Modal/ModalContact';
import './ContactCard.scss';

function ContactCard({ ...contact }: Contact) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="orgaSheet-case orgaSheet-contact">
      {isActive && (
        <Modal
          setIsActive={setIsActive}
          name={contact.name}
          job={contact.job}
          phone={contact.phone}
          mail={contact.mail}
          visibility={contact.visibility}
          actualisation={contact.actualisation}
        />
      )}
      <div className="orgaSheet-contact__header">
        <div className="orgaSheet-contact__subheader">
          <h5>Contact</h5>
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
        <div className="orgaSheet-contact__infos">
          <p className="orgaSheet-contact__nom">{contact.name}</p>
          <p className="orgaSheet-contact__fonction">{contact.job}</p>
        </div>
        <div className="orgaSheet-contact__name">
          <p className="orgaSheet-contact__mail">{contact.phone}</p>
          <p className="orgaSheet-contact__tel">{contact.mail}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
