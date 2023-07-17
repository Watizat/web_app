import './Services.scss';

function Services() {
  return (
    <article className="orgaSheet-card orgaSheet-services">
      <h3>Services disponibles</h3>
      <ul className="orgaSheet-services__list">
        <li className="orgaSheet-services__serviceCard">
          <span className="serviceCard-header">
            <h4 className="serviceCard-subheader">Acceuil de jour</h4>
            <button
              type="button"
              className="orgaSheet-edition__menu"
              className="orgaSheet-edition__menu"
            >
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
            <div className="orgaSheet-contact serviceCard-data__contacts">
              <div className="orgaSheet-contact__header">
                <h5>Contact 1</h5>
                <td className="contacts-roles">
                  <span className="contacts-roles__role contacts-roles__public">
                    public
                  </span>
                  <span className="contacts-roles__role contacts-roles__actualisation">
                    actualisation
                  </span>
                  <span className="contacts-roles__role contacts-roles__prive">
                    privé
                  </span>
                </td>
                <button type="button" className="orgaSheet-edition__menu">
                  <i className="las la-ellipsis-h" />
                </button>
              </div>
              <div className="orgaSheet-contact__details">
                <div className="orgaSheet-contact__infos">
                  <p className="orgaSheet-contact__nom">Michel Larem</p>
                  <p className="orgaSheet-contact__fonction">
                    Assistant social
                  </p>
                </div>
                <div className="orgaSheet-contact__name">
                  <p className="orgaSheet-contact__mail">06 25 65 45 78</p>
                  <p className="orgaSheet-contact__tel">laprem@gmail.com</p>
                </div>
              </div>
            </div>
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
            <div className="orgaSheet-contact serviceCard-data__contacts">
              <div className="orgaSheet-contact__header">
                <h5>Contact 1</h5>
                <td className="contacts-roles">
                  <span className="contacts-roles__role contacts-roles__public">
                    public
                  </span>
                  <span className="contacts-roles__role contacts-roles__actualisation">
                    actualisation
                  </span>
                </td>
                <button type="button" className="orgaSheet-edition__menu">
                  <i className="las la-ellipsis-h" />
                </button>
              </div>
              <div className="orgaSheet-contact__details">
                <div className="orgaSheet-contact__infos">
                  <p className="orgaSheet-contact__nom">Michel Larem</p>
                  <p className="orgaSheet-contact__fonction">
                    Assistant social
                  </p>
                </div>
                <div className="orgaSheet-contact__name">
                  <p className="orgaSheet-contact__mail">06 25 65 45 78</p>
                  <p className="orgaSheet-contact__tel">laprem@gmail.com</p>
                </div>
              </div>
            </div>
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
            <div className="orgaSheet-contact serviceCard-data__contacts">
              <div className="orgaSheet-contact__header">
                <h5>Contact 1</h5>
                <td className="contacts-roles">
                  <span className="contacts-roles__role contacts-roles__public">
                    public
                  </span>
                </td>{' '}
                <button type="button" className="orgaSheet-edition__menu">
                  <i className="las la-ellipsis-h" />
                </button>
              </div>
              <div className="orgaSheet-contact__details">
                <div className="orgaSheet-contact__infos">
                  <p className="orgaSheet-contact__nom">Michel Larem</p>
                  <p className="orgaSheet-contact__fonction">
                    Assistant social
                  </p>
                </div>
                <div className="orgaSheet-contact__name">
                  <p className="orgaSheet-contact__mail">06 25 65 45 78</p>
                  <p className="orgaSheet-contact__tel">laprem@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="orgaSheet-contact serviceCard-data__contacts">
              <div className="orgaSheet-contact__header">
                <h5>Contact 2</h5>
                <td className="contacts-roles">
                  <span className="contacts-roles__role contacts-roles__actualisation">
                    actualisation
                  </span>
                  <span className="contacts-roles__role contacts-roles__prive">
                    privé
                  </span>
                </td>
                <button type="button" className="orgaSheet-edition__menu">
                  <i className="las la-ellipsis-h" />
                </button>
              </div>
              <div className="orgaSheet-contact__details">
                <div className="orgaSheet-contact__infos">
                  <p className="orgaSheet-contact__nom">Michel Larem</p>
                  <p className="orgaSheet-contact__fonction">
                    Assistant social
                  </p>
                </div>
                <div className="orgaSheet-contact__name">
                  <p className="orgaSheet-contact__mail">06 25 65 45 78</p>
                  <p className="orgaSheet-contact__tel">laprem@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </article>
  );
}

export default Services;
