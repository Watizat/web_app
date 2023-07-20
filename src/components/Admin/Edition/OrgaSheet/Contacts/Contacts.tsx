import { useState } from 'react';
import ContactCard from '../ContactCard/ContactCard';
import Modal from '../../../Modal/ModalContact';
import './Contacts.scss';

function Contacts({ contacts }) {
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
        {contacts.map((e) => (
          <ContactCard
            key={e.id}
            name={e.name}
            fonction={e.fonction}
            phone={e.phone}
            mail={e.mail}
            visibility={e.visibility}
            actualisation={e.actualisation}
          />
        ))}
      </div>
    </article>
  );
}

export default Contacts;
