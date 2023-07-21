import { useState } from 'react';
import ContactCard from '../../ContactCard/ContactCard';
import ModalService from '../../../../Modal/ModalService';
import ModalContact from '../../../../Modal/ModalContact';
import './ServiceCard.scss';

function ServiceCard({
  name,
  categories,
  description,
  hours,
  infos_alerte,
  contacts,
}) {
  const [isActiveService, setIsActiveService] = useState(false);
  const [isActiveContact, setIsActiveContact] = useState(false);
  return (
    <li className="orgaSheet-services__serviceCard">
      {isActiveContact && (
        <ModalContact
          setIsActive={setIsActiveContact}
          name={name}
          job={job}
          phone={phone}
          mail={mail}
          visibility={visibility}
          actualisation={actualisation}
        />
      )}
      {isActiveService && (
        <ModalService
          setIsActive={setIsActiveService}
          name={name}
          categories={categories}
          description={description}
          hours={hours}
          infos_alerte={infos_alerte}
          contacts={contacts}
        />
      )}
      <span className="serviceCard-header">
        <h4 className="serviceCard-subheader">{name}</h4>
        <span className="serviceCard-actions">
          <button
            type="button"
            className="orgaSheet-edition__menu"
            onClick={() => setIsActiveContact(true)}
          >
            <i className="las la-address-book" />
          </button>
          <button
            type="button"
            className="orgaSheet-edition__menu"
            onClick={() => setIsActiveService(true)}
          >
            <i className="las la-edit" />
          </button>
        </span>
      </span>
      <div className="serviceCard-data">
        <p className="serviceCard-data__info">{description}</p>
        <table className="serviceCard-data__hoursDetails">
          {hours.map((e) => (
            <tr key={e.name} className="serviceCard-data__days">
              <td
                className={
                  e.day === 6 || e.day === 7
                    ? 'serviceCard-data__daysOff'
                    : 'serviceCard-data__daysOn'
                }
              >
                {e.name}
              </td>
              <td className="serviceCard-data__hours">{`${e.open_am} - ${e.close_am} / ${e.open_pm} - ${e.close_pm}`}</td>
            </tr>
          ))}
        </table>
        <p className="serviceCard-data__alerts">{infos_alerte}</p>
        {contacts.map((e) => (
          <ContactCard
            key={e.id}
            name={e.name}
            job={e.job}
            phone={e.phone}
            mail={e.mail}
            visibility={e.visibility}
            actualisation={e.actualisation}
          />
        ))}
      </div>
    </li>
  );
}

export default ServiceCard;
