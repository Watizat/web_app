import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/redux';
import styles from './Contact.module.scss';
import orga from '../../Organisme.module.scss';

function Contact() {
  const organism = useAppSelector((state) => state.organism.organism);

  if (organism === null) {
    return <span>Erreur</span>;
  }
  return (
    <article className={styles.articleContact}>
      <h3 className={orga.title}>Contact</h3>
      <div className={styles.allContacts}>
        <div className={styles.mainContact}>
          <p className={styles.mainContact_txt}>Contact principal </p>
          <Link to={`tel:${organism.phone}`} className={styles.link}>
            <p>{organism.phone}</p>
          </Link>
          <Link to={`mailto:${organism.mail}`} className={styles.link}>
            <p>{organism.mail}</p>
          </Link>
        </div>
        {organism.contacts
          .filter((contact) => contact.visibility === true)
          .map((contact) => (
            <div className={styles.otherContact} key={contact.name}>
              <p className={styles.otherContact_job}>{contact.job}</p>
              <p>{contact.name}</p>
              <p>{contact.comment}</p>
              <Link to={`tel:${contact.phone}`} className={styles.link}>
                <p>{contact.phone}</p>
              </Link>
              <Link to={`mailto:${contact.mail}`} className={styles.link}>
                <p>{contact.mail}</p>
              </Link>
            </div>
          ))}
      </div>
    </article>
  );
}

export default Contact;
