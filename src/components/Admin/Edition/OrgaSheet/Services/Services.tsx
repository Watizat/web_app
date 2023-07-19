import ContactCard from '../ContactCard/ContactCard';
import './Services.scss';

function Services() {
  return (
    <article className="orgaSheet-card orgaSheet-services">
      <span className="orgaSheet-card__titleBar">
        <h3 className="orgaSheet-card__title">Services disponibles</h3>
      </span>

      <ul className="orgaSheet-services__list">
        <li className="orgaSheet-services__serviceCard">
          <span className="serviceCard-header">
            <h4 className="serviceCard-subheader">Acceuil de jour</h4>
            <button type="button" className="orgaSheet-edition__menu">
              <i className="las la-ellipsis-h" />
            </button>
          </span>
          <div className="serviceCard-data">
            <p className="serviceCard-data__info">
              Petits déjeuners, boissons chaudes
            </p>
            <table className="serviceCard-data__hoursDetails">
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOn">Lundi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOn">Mardi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOn">Mercredi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOn">Jeudi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOn">Vendredi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOff">Samedi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOff">Dimanche</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
            </table>
            <p className="serviceCard-data__alerts">
              Fermeture le troisième dimanche de la quatrième année du
              calendrier maya postcolonial si y&apos;a pas grève à la SNCF
            </p>
            <ContactCard />
          </div>
        </li>
        <li className="orgaSheet-services__serviceCard">
          <span className="serviceCard-header">
            <h4 className="serviceCard-subheader">Acceuil de jour</h4>
            <button type="button" className="orgaSheet-edition__menu">
              <i className="las la-ellipsis-h" />
            </button>
          </span>
          <div className="serviceCard-data">
            <p className="serviceCard-data__info">
              Petits déjeuners, boissons chaudes
            </p>
            <table className="serviceCard-data__hoursDetails">
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOn">Lundi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOn">Mardi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOn">Mercredi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOn">Jeudi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOn">Vendredi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOff">Samedi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOff">Dimanche</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
            </table>
            <p className="serviceCard-data__alerts">
              Fermeture le troisième dimanche de la quatrième année du
              calendrier maya postcolonial si y&apos;a pas grève à la SNCF
            </p>
            <ContactCard />
          </div>
        </li>
        <li className="orgaSheet-services__serviceCard">
          <span className="serviceCard-header">
            <h4 className="serviceCard-subheader">Acceuil de jour</h4>
            <button type="button" className="orgaSheet-edition__menu">
              <i className="las la-ellipsis-h" />
            </button>
          </span>
          <div className="serviceCard-data">
            <p className="serviceCard-data__info">
              Petits déjeuners, boissons chaudes
            </p>
            <table className="serviceCard-data__hoursDetails">
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOn">Lundi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOn">Mardi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOn">Mercredi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOn">Jeudi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOn">Vendredi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOff">Samedi</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
              <tr className="serviceCard-data__days">
                <td className="serviceCard-data__daysOff">Dimanche</td>
                <td className="serviceCard-data__hours">9h-12h / 14h-16h</td>
              </tr>
            </table>
            <p className="serviceCard-data__alerts">
              Fermeture le troisième dimanche de la quatrième année du
              calendrier maya postcolonial si y&apos;a pas grève à la SNCF
            </p>
            <ContactCard />
            <ContactCard />
          </div>
        </li>
      </ul>
    </article>
  );
}

export default Services;
