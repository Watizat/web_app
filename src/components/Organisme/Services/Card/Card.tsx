import classNames from 'classnames';
import { useState } from 'react';
import { Organism, Service } from '../../../../@types/organism';
import { useAppSelector } from '../../../../hooks/redux';
import Icon from '../../../../ui/icon/icon';
import Schedules from '../../Infos/Schedule/Schedule';
import './Card.scss';

interface ServiceProps {
  service: Service;
}

function Card({ service }: ServiceProps) {
  const organism = useAppSelector(
    (state) => state.organism.organism as Organism
  );
  const [isOpen, setIsOpen] = useState(false);

  // si l'organism n'existe pas
  if (organism === null) {
    return <span>Erreur</span>;
  }

  // console.log(
  //   service.schedules,
  //   service.schedules.length,
  //   service.schedules && service.schedules.length > 0
  // );

  return (
    <div
      className="organisme-services-contentcards--cards"
      key={service.categorie_id.tag}
    >
      <article>
        <button
          className={classNames(
            'organisme-services-contentcards--cards-header',
            {
              'organisme-services-contentcards--cards-header--open': isOpen,
            }
          )}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h4>
            <Icon
              className="organisme-services-contentcards--cards-header-icon"
              icon={service.categorie_id.tag}
            />
            {service.categorie_id.translations[0].name}

            <i
              className={isOpen ? 'las la-minus-circle' : 'las la-plus-circle'}
            />
          </h4>
        </button>
        <div
          className={classNames(
            'organisme-services-contentcards--cards-content',
            { 'is-visible': isOpen }
          )}
        >
          <h5>{service.translations[0].name}</h5>
          <p className="organisme-services-contentcards--cards-content-txt">
            {service.translations[0].description}
          </p>
          {service.contacts.map((contact) => (
            <>
              <p className="organisme-services-contentcards--cards-content-job">
                {contact.job}
              </p>
              <p className="organisme-services-contentcards--cards-content-txt">
                {contact.name}
              </p>
              <p className="organisme-services-contentcards--cards-content-txt">
                {contact.phone}
              </p>
              <p className="organisme-services-contentcards--cards-content-txt">
                {contact.mail.toLowerCase()}
              </p>
            </>
          ))}
          {service.schedules
            .map((day) =>
              day.opentime_am ||
              day.opentime_pm ||
              day.closetime_am ||
              day.closetime_pm
                ? 1
                : 0
            )
            .find((e) => e === 1) && (
            <>
              <h5>Horaires</h5>
              <Schedules schedule={service.schedules} displayAll={false} />
            </>
          )}
        </div>
      </article>
    </div>
  );
}

export default Card;

[
  {
    day: 1,
    opentime_am: '09:00:00',
    closetime_am: '10:30:00',
    opentime_pm: null,
    closetime_pm: null,
  },
  {
    day: 2,
    opentime_am: '09:00:00',
    closetime_am: '10:30:00',
    opentime_pm: null,
    closetime_pm: null,
  },
  {
    day: 3,
    opentime_am: '09:00:00',
    closetime_am: '10:30:00',
    opentime_pm: null,
    closetime_pm: null,
  },
  {
    day: 4,
    opentime_am: '09:00:00',
    closetime_am: '10:30:00',
    opentime_pm: null,
    closetime_pm: null,
  },
  {
    day: 5,
    opentime_am: '09:00:00',
    closetime_am: '10:30:00',
    opentime_pm: null,
    closetime_pm: null,
  },
  {
    day: 7,
    opentime_am: null,
    closetime_am: null,
    opentime_pm: null,
    closetime_pm: null,
  },
  {
    day: 6,
    opentime_am: null,
    closetime_am: null,
    opentime_pm: null,
    closetime_pm: null,
  },
];
