import ContactCard from '../ContactCard/ContactCard';
import './Contacts.scss';

function Contacts() {
  return (
    <article className="orgaSheet-card orgaSheet-contacts">
      <h3>Contacts</h3>
      <div className="orgaSheet-contacts__list">
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </article>
  );
}

export default Contacts;
