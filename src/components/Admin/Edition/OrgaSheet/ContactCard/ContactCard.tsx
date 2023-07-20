import { useState } from 'react';
import Modal from '../../../Modal/ModalContact';
import './ContactCard.scss';

function ContactCard({
  name,
  fonction,
  phone,
  mail,
  visibility,
  actualisation,
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="orgaSheet-case orgaSheet-contact">
      {isActive && <Modal setIsActive={setIsActive} />}
      <div className="orgaSheet-contact__header">
        <div className="orgaSheet-contact__subheader">
          <h5>Contact</h5>
          <div className="contacts-roles">
            {actualisation ? (
              <span className="contacts-roles__role contacts-roles__actualisation">
                actualisation
              </span>
            ) : null}
            {visibility === 'private' ? (
              <span className="contacts-roles__role contacts-roles__prive">
                prive
              </span>
            ) : (
              <span className="contacts-roles__role contacts-roles__public">
                public
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
          <p className="orgaSheet-contact__nom">{name}</p>
          <p className="orgaSheet-contact__fonction">{fonction}</p>
        </div>
        <div className="orgaSheet-contact__name">
          <p className="orgaSheet-contact__mail">{phone}</p>
          <p className="orgaSheet-contact__tel">{mail}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
