import { useState } from 'react';
import ContactCard from '../ContactCard/ContactCard';
import Modal from '../../../Modal/ModalContact';
import './Contacts.scss';

function Contacts({ contacts }: any) {
  const [isActive, setIsActive] = useState(false);

  return (
    <article className="orgaSheet-card orgaSheet-contacts">
      {isActive && <Modal setIsActive={setIsActive} />}

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
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            job={contact.job}
            phone={contact.phone}
            mail={contact.mail}
            visibility={contact.visibility}
            actualisation={contact.actualisation}
          />
        ))}
      </div>
    </article>
  );
}

export default Contacts;
