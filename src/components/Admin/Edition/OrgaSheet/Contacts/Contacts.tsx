import { useState } from 'react';
import { Contact } from '../../../../../@types/organism';
import ModalAddContact from '../../../Modal/ModalAddContact';
import ContactCard from './ContactCard/ContactCard';
import './Contacts.scss';

interface ContactProps {
  contacts: Contact[];
}

function Contacts({ contacts }: ContactProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <article className="orgaSheet-card orgaSheet-contacts">
      {isActive && <ModalAddContact setIsActive={setIsActive} />}

      <span className="orgaSheet-card__titleBar">
        <h3 className="orgaSheet-card__title">Contacts</h3>
        <button
          type="button"
          className="orgaSheet-card__menu"
          onClick={() => setIsActive(true)}
        >
          <i className="las la-plus-circle" />
        </button>
      </span>

      <div className="orgaSheet-contacts__list">
        {contacts && contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard key={contact.id} {...contact} />
          ))
        ) : (
          <span>Pas de contacts</span>
        )}
      </div>
    </article>
  );
}

export default Contacts;
