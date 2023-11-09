import { Contact } from '../../../../@types/organism';
import Card from './Components/Card';
import ContactCard from './Components/ContactCard';

interface Props {
  contacts: Contact[];
}

export default function Contacts({ contacts }: Props) {
  const menuChoices = [
    {
      title: 'Ajouter un contact',
      onClick: () => {
        // eslint-disable-next-line no-console
        console.log('Modifier');
      },
    },
  ];

  return (
    <Card
      title="Contacts"
      srMessage="Information de contact"
      menuChoices={menuChoices}
    >
      <div>
        <div
          className={`grid grid-cols-1 ${
            contacts.length === 1 ? 'xl:grid-cols-1' : 'xl:grid-cols-2'
          }`}
        >
          {contacts.map((contact, index) => (
            <ContactCard key={contact.id} contact={contact} index={index} />
          ))}
        </div>
      </div>
    </Card>
  );
}
