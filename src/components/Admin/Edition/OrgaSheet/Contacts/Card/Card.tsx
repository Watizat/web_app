import { useState } from 'react';
import { Contact } from '../../../../../../@types/organism';
import ModalEditContact from '../../../../Modal/ModalEditContact';
import styles from './Card.module.scss';
import orgaSheet from '../../OrgaSheet.module.scss';

function ContactCard({ ...contact }: Contact) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${orgaSheet.orgaSheet_case} ${styles.contact}`}>
      {isActive && (
        <ModalEditContact setIsActive={setIsActive} contact={contact} />
      )}
      <div className={styles.contact_header}>
        <div className={styles.contact_subheader}>
          <h5 className={styles.contact_subheader__title}>{contact.name}</h5>
          <div className={styles.contact_roles}>
            {contact.actualisation ? (
              <span
                className={`${styles.contact_roles__role} ${styles.contact_roles__actualisation}`}
              >
                Actualisation
              </span>
            ) : null}
            {contact.visibility === false ? (
              <span
                className={`${styles.contact_roles__role} ${styles.contact_roles__prive}`}
              >
                Privé
              </span>
            ) : (
              <span
                className={`${styles.contact_roles__role} ${styles.contact_roles__public}`}
              >
                Public
              </span>
            )}
          </div>
        </div>
        <button type="button" onClick={() => setIsActive(true)}>
          <i className="las la-ellipsis-h" />
        </button>
      </div>
      <div className={styles.contact_details}>
        <div className={styles.contact_details__infos}>
          <p className={styles.contact_details__infos___job}>{contact.job}</p>
          <p className={styles.contact_details__infos___job}>
            {contact.comment}
          </p>
          <p className={styles.contact_details__infos___phone}>
            {contact.phone}
          </p>
        </div>
        <div className={styles.contact_details__infos}>
          <p className={styles.contact_details__infos___mail}>{contact.mail}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
