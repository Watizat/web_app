import { Contact } from '../../../../../@types/organism';
import ContactCard from './ContactCard/ContactCard';
import './Contacts.scss';

interface ContactProps {
  contacts: Contact[];
}

function Contacts({ contacts }: ContactProps) {
  // const [isActive, setIsActive] = useState(false);

  return (
    <article className="orgaSheet-card orgaSheet-contacts">
      {/* Besoin d'une modale Ajout de contact ici ! */}
      {/*       {isActive && <Modal setIsActive={setIsActive} />}
       */}
      <span className="orgaSheet-card__titleBar">
        <h3 className="orgaSheet-card__title">Contacts</h3>
        <button
          type="button"
          className="orgaSheet-card__menu"
          // onClick={() => setIsActive(true)}
        >
          <i className="las la-plus-circle" />
        </button>
      </span>

      <div className="orgaSheet-contacts__list">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </article>
  );
}

export default Contacts;
