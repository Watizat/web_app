import { useState } from 'react';
import { Contact } from '../../../../@types/organism';
import NewContact from '../../../SlideOvers/NewContact';
import Card from './Components/Card';
import ContactCard from './Components/ContactCard';

interface Props {
  contacts: Contact[];
}

export default function Contacts({ contacts }: Props) {
  const [isOpenSlide, setIsOpenSlide] = useState(false);
  const menuChoices = [
    {
      title: 'Ajouter un contact',
      onClick: () => {
        setIsOpenSlide(true);
      },
    },
  ];

  return (
    <>
      {/* Slide d'ajout d'un contact */}
      <NewContact isOpenSlide={isOpenSlide} setIsOpenSlide={setIsOpenSlide} />
      {/*  Modal de suppression du contact */}
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
    </>
  );
}
