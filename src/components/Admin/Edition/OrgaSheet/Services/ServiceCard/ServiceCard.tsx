import { useState } from 'react';
import ContactCard from '../../ContactCard/ContactCard';
import ModalService from '../../../../Modal/ModalService';
import ModalContact from '../../../../Modal/ModalContact';
import { ServiceTranslation, Contact } from '../../../../../../@types/organism';
import './ServiceCard.scss';

function ServiceCard(
  //! WARNING : Je ne sais pas typer categorie, car il correspond à name dans la table categorie
  //! WARNING : Lorsque j'essai de typer schedule, j'ai une erreur
  { categories, schedules },
  { name, description, infos_alerte }: ServiceTranslation,
  contacts: Contact[]
) {
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
          schedules={schedules}
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
        <p className="serviceCard-data__info">Categorie : {categories}</p>
        <p className="serviceCard-data__info">{description}</p>
        <table className="serviceCard-data__hoursDetails">
          {schedules.map((day) => (
            <tr key={day.day} className="serviceCard-data__days">
              <td
                className={
                  day.day === 6 || day.day === 7
                    ? 'serviceCard-data__daysOff'
                    : 'serviceCard-data__daysOn'
                }
              >
                {day.day}
              </td>
              <td className="serviceCard-data__hours">
                {(() => {
                  if (!day.opentime_am && !day.opentime_pm) {
                    return 'Fermé';
                  }
                  if (
                    day.opentime_am &&
                    !day.opentime_pm &&
                    !day.closetime_pm
                  ) {
                    return `${day.opentime_am.slice(
                      0,
                      -3
                    )} - ${day.closetime_am.slice(0, -3)}`;
                  }
                  if (!day.opentime_am && day.opentime_pm && day.closetime_pm) {
                    return `${day.opentime_pm.slice(
                      0,
                      -3
                    )} - ${day.closetime_pm.slice(0, -3)}`;
                  }
                  if (
                    day.opentime_am &&
                    day.closetime_am &&
                    day.opentime_pm &&
                    day.closetime_pm
                  ) {
                    return `${day.opentime_am.slice(
                      0,
                      -3
                    )} - ${day.closetime_am.slice(
                      0,
                      -3
                    )} / ${day.opentime_pm.slice(
                      0,
                      -3
                    )} - ${day.closetime_pm.slice(0, -3)}`;
                  }
                  if (
                    day.opentime_am &&
                    !day.closetime_am &&
                    !day.opentime_pm &&
                    day.closetime_pm
                  ) {
                    return `${day.opentime_am.slice(
                      0,
                      -3
                    )} - ${day.closetime_pm.slice(0, -3)}`;
                  }
                })()}
              </td>
            </tr>
          ))}
        </table>
        <p className="serviceCard-data__alerts">{infos_alerte}</p>
        {/* {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            job={contact.job}
            phone={contact.phone}
            mail={contact.mail}
            visibility={contact.visibility}
            actualisation={contact.actualisation}
          />
        ))} */}
      </div>
    </li>
  );
}

export default ServiceCard;
