import { useState } from 'react';
import classNames from 'classnames';
import './Card.scss';
import { useAppSelector } from '../../../../hooks/redux';
import Schedules from '../../Infos/Schedule/Schedule';

function Card() {
  const organism = useAppSelector((state) => state.organism.organism);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpenSettings() {
    setIsOpen(!isOpen);
  }
  if (organism === null) {
    return <span>Erreur</span>;
  }

  return (
    <div className="organisme-services-contentcards">
      {organism.services.map((service) => (
        // eslint-disable-next-line react/jsx-key
        <div className="organisme-services-contentcards--cards">
          <article>
            <button
              className={classNames(
                'organisme-services-contentcards--cards-header',
                {
                  'organisme-services-contentcards--cards-header--open': isOpen,
                }
              )}
              type="button"
              onClick={handleOpenSettings}
            >
              <h4>
                <i className="las la-utensils" />
                {service.categorie_id.translations[0].name}

                <i
                  className={
                    isOpen ? 'las la-minus-circle' : 'las la-plus-circle'
                  }
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
              <p>{service.translations[0].description}</p>
              {service.contacts.map((contact) => (
                <>
                  <p>{contact.job}</p>
                  <p>{contact.name}</p>
                  <p>{contact.phone}</p>
                  <p>{contact.mail.toLowerCase()}</p>
                </>
              ))}

              <Schedules schedule={service.schedules} />
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

export default Card;
