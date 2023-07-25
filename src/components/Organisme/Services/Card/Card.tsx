import { useState } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '../../../../hooks/redux';
import Schedules from '../../Infos/Schedule/Schedule';
import Icon from '../../../../ui/icon/icon';
import './Card.scss';

function Card() {
  const organism = useAppSelector((state) => state.organism.organism);

  // si l'organism n'existe pas
  if (organism === null) {
    return <span>Erreur</span>;
  }
  // Utiliser un tableau d'états pour gérer l'ouverture/fermeture de chaque carte individuellement
  const [isOpenArray, setIsOpenArray] = useState<boolean[]>(
    organism.services.map(() => false)
  );

  function handleOpenSettings(index: number) {
    // Mettre à jour l'état de la carte à l'index spécifié
    const newIsOpenArray = [...isOpenArray];
    newIsOpenArray[index] = !newIsOpenArray[index];
    setIsOpenArray(newIsOpenArray);
  }

  return (
    <div className="organisme-services-contentcards">
      {organism.services.map((service, index) => (
        // eslint-disable-next-line react/jsx-key
        <div className="organisme-services-contentcards--cards" key={index}>
          <article>
            <button
              className={classNames(
                'organisme-services-contentcards--cards-header',
                {
                  'organisme-services-contentcards--cards-header--open':
                    isOpenArray[index],
                }
              )}
              type="button"
              onClick={() => handleOpenSettings(index)}
            >
              <h4>
                <Icon
                  className="organisme-services-contentcards--cards-header-icon"
                  icon={service.categorie_id.tag}
                  size="30px"
                />
                {service.categorie_id.translations[0].name}

                <i
                  className={
                    isOpenArray[index]
                      ? 'las la-minus-circle'
                      : 'las la-plus-circle'
                  }
                />
              </h4>
            </button>

            <div
              className={classNames(
                'organisme-services-contentcards--cards-content',
                { 'is-visible': isOpenArray[index] }
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
              {service.schedules.length > 0 && (
                <>
                  <h5>Horaires</h5>
                  <Schedules schedule={service.schedules} />
                </>
              )}
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

export default Card;
