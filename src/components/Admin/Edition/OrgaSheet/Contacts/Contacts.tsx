import { useState } from 'react';
import { Contact } from '../../../../../@types/organism';
import ModalAddContact from '../../../Modal/ModalAddContact';
import ContactCard from './Card/Card';
import styles from './Contacts.module.scss';
import orgaSheet from '../OrgaSheet.module.scss';

interface ContactProps {
  contacts: Contact[];
}

function Contacts({ contacts }: ContactProps) {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <article className={`${orgaSheet.orgaSheet_card} ${styles.contacts}`}>
      {isModalActive && <ModalAddContact setIsModalActive={setIsModalActive} />}

      <span className={orgaSheet.orgaSheet_card__titleBar}>
        <h3 className={orgaSheet.orgaSheet_card__title}>Contacts</h3>
        <button
          type="button"
          className={orgaSheet.orgaSheet_card__menu}
          onClick={() => setIsModalActive(true)}
        >
          <i className="las la-plus-circle" />
        </button>
      </span>

      <div className={styles.contacts_list}>
        {contacts && contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard key={contact.id} {...contact} />
          ))
        ) : (
          <span className={styles.contacts_noContacts}>
            Aucun contact à afficher
          </span>
        )}
      </div>
    </article>
  );
}

export default Contacts;
