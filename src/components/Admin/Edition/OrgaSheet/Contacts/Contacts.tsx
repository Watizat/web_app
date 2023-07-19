import ContactCard from '../ContactCard/ContactCard';
import './Contacts.scss';

function Contacts() {
  return (
    <article className="orgaSheet-card orgaSheet-contacts">
      <span className="orgaSheet-card__titleBar">
        <h3 className="orgaSheet-card__title">Contacts</h3>
      </span>
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
