import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/redux';
import './Contact.scss';

function Contact() {
  const organism = useAppSelector((state) => state.organism.organism);

  if (organism === null) {
    return <span>Erreur</span>;
  }
  return (
    <article>
      <h3>Contact</h3>
      <div className="organisme-infos--maincontact">
        <p>
          {organism.address} - <span>{organism.zipcode}</span>{' '}
          <span>{organism.city}</span>
        </p>
        <Link to="tel:+3300" className="organisme-infos--link">
          <p>{organism.phone}</p>
        </Link>
        <Link to="tel:+3300" className="organisme-infos--link">
          <p>{organism.mail}</p>
        </Link>
      </div>
      {organism.contacts.length > 0 &&
        organism.contacts.map((contact) => (
          <div className="organisme-infos--othercontact" key={contact.name}>
            <p className="organisme-infos--othercontact-job">{contact.job}</p>
            <p>{contact.name}</p>
            <p>{contact.comment}</p>
            <Link to={`tel:${contact.phone}`} className="organisme-infos--link">
              <p>{contact.phone}</p>
            </Link>
            <Link
              to={`mailto:${contact.mail}`}
              className="organisme-infos--link"
            >
              <p>{contact.mail}</p>
            </Link>
          </div>
        ))}
    </article>
  );
}

export default Contact;
