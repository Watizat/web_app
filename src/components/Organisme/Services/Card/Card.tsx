import classNames from 'classnames';
import { useState } from 'react';
import { Organism, Service } from '../../../../@types/organism';
import { useAppSelector } from '../../../../hooks/redux';
import Icon from '../../../../ui/icon/icon';
import Schedules from '../../Infos/Schedule/Schedule';
import styles from './Card.module.scss';

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

  return (
    <div className={styles.card} key={service.categorie_id.tag}>
      <article>
        <button
          className={classNames(styles.card_header, {
            [styles.card_header__open]: isOpen,
          })}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h4>
            <Icon
              className={styles.card_header__icon}
              icon={service.categorie_id.tag}
            />
            {service.categorie_id.translations[0].name}

            <i
              className={isOpen ? 'las la-minus-circle' : 'las la-plus-circle'}
            />
          </h4>
        </button>
        <div
          className={classNames(styles.card_content, {
            [styles.isVisible]: isOpen,
          })}
        >
          <h5>{service.translations[0].name}</h5>
          <p className={styles.card_content__txt}>
            {service.translations[0].description}
          </p>
          {service.contacts.map((contact) => (
            <>
              <p className={styles.card_content__job}>{contact.job}</p>
              <p className={styles.card_header__txt}>{contact.name}</p>
              <p className={styles.card_header__txt}>{contact.phone}</p>
              <p className={styles.card_header__txt}>
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

// [
//   {
//     day: 1,
//     opentime_am: '09:00:00',
//     closetime_am: '10:30:00',
//     opentime_pm: null,
//     closetime_pm: null,
//   },
//   {
//     day: 2,
//     opentime_am: '09:00:00',
//     closetime_am: '10:30:00',
//     opentime_pm: null,
//     closetime_pm: null,
//   },
//   {
//     day: 3,
//     opentime_am: '09:00:00',
//     closetime_am: '10:30:00',
//     opentime_pm: null,
//     closetime_pm: null,
//   },
//   {
//     day: 4,
//     opentime_am: '09:00:00',
//     closetime_am: '10:30:00',
//     opentime_pm: null,
//     closetime_pm: null,
//   },
//   {
//     day: 5,
//     opentime_am: '09:00:00',
//     closetime_am: '10:30:00',
//     opentime_pm: null,
//     closetime_pm: null,
//   },
//   {
//     day: 7,
//     opentime_am: null,
//     closetime_am: null,
//     opentime_pm: null,
//     closetime_pm: null,
//   },
//   {
//     day: 6,
//     opentime_am: null,
//     closetime_am: null,
//     opentime_pm: null,
//     closetime_pm: null,
//   },
// ];
