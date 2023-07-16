import './OrgaSheet.scss';

function OrgaSheet() {
  return (
    <section className="orgaSheet">
      <article className="orgaSheet-infos">
        <h1>Informations organisme</h1>
        <table className="orgaSheet-infos__table">
          <td className="orgaSheet-case">
            <h4>Organisme</h4>
            <p>
              Croix rouge française de l&apos;apostolque de machin truc (antenne
              sud)
            </p>
          </td>
          <td className="orgaSheet-case">
            <h4>Adresse</h4>
            <p>66 rue de l&apos;ambassadeur de la petite provence</p>
          </td>
          <td className="orgaSheet-case">
            <h4>Ville</h4>
            <p>Toulouse</p>
          </td>
          <td className="orgaSheet-case">
            <h4>Code postal</h4>
            <p>31500</p>
          </td>
        </table>
      </article>
      <article className="orgaSheet-card orgaSheet-contacts">
        <h3>Contacts</h3>
        <table className="orgaSheet-contacts__table">
          <td className="orgaSheet-case">
            <div className="orgaSheet-contacts__header">
              <h4>Contact 1</h4>
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
            </div>
            <div className="orgaSheet-contacts__details">
              <div className="orgaSheet-contacts__infos">
                <p className="orgaSheet-contacts__nom">Michel Larem</p>
                <p className="orgaSheet-contacts__fonction">Assistant social</p>
              </div>
              <div className="orgaSheet-contacts__name">
                <p className="orgaSheet-contacts__mail">06 25 65 45 78</p>
                <p className="orgaSheet-contacts__tel">laprem@gmail.com</p>
              </div>
            </div>
          </td>
          <td className="orgaSheet-case">
            <div className="orgaSheet-contacts__header">
              <h4>Contact 1</h4>
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
            </div>
            <div className="orgaSheet-contacts__details">
              <div className="orgaSheet-contacts__infos">
                <p className="orgaSheet-contacts__nom">Michel Larem</p>
                <p className="orgaSheet-contacts__fonction">Assistant social</p>
              </div>
              <div className="orgaSheet-contacts__name">
                <p className="orgaSheet-contacts__mail">06 25 65 45 78</p>
                <p className="orgaSheet-contacts__tel">laprem@gmail.com</p>
              </div>
            </div>
          </td>
          <td className="orgaSheet-case">
            <div className="orgaSheet-contacts__header">
              <h4>Contact 1</h4>
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
            </div>
            <div className="orgaSheet-contacts__details">
              <div className="orgaSheet-contacts__infos">
                <p className="orgaSheet-contacts__nom">Michel Larem</p>
                <p className="orgaSheet-contacts__fonction">Assistant social</p>
              </div>
              <div className="orgaSheet-contacts__name">
                <p className="orgaSheet-contacts__mail">06 25 65 45 78</p>
                <p className="orgaSheet-contacts__tel">laprem@gmail.com</p>
              </div>
            </div>
          </td>
          <td className="orgaSheet-case">
            <div className="orgaSheet-contacts__header">
              <h4>Contact 1</h4>
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
            </div>
            <div className="orgaSheet-contacts__details">
              <div className="orgaSheet-contacts__infos">
                <p className="orgaSheet-contacts__nom">Michel Larem</p>
                <p className="orgaSheet-contacts__fonction">Assistant social</p>
              </div>
              <div className="orgaSheet-contacts__name">
                <p className="orgaSheet-contacts__mail">06 25 65 45 78</p>
                <p className="orgaSheet-contacts__tel">laprem@gmail.com</p>
              </div>
            </div>
          </td>
        </table>{' '}
      </article>
      <article className="orgaSheet-card orgaSheet-data">
        <h3>Informations génerales</h3>
        <table className="orgaSheet-data__table">
          <td className="orgaSheet-case orgaSheet-data__access">
            <h4>Accés</h4>
            <div className="orgaSheet-data__accessDetails">
              <p className="orgaSheet-data__pmr">
                <input type="checkbox" />
                Accessible PSH /PMR
              </p>
              <p className="orgaSheet-data__animals">
                <input type="checkbox" />
                Animaux admis
              </p>
            </div>
          </td>
          <td className="orgaSheet-case">
            <h4>Description</h4>
            <p>
              Écoute, renseignement et orientation pour les personnes sans
              domicile fixe n’ayant pas de référent social. Service social
              public qui apporte une aide ponctuelle sur les besoins de première
              nécessité et l&apos;accès aux droits. Pour assurer un suivi, une
              orientation vers un référent social aura lieu.
            </p>
          </td>
          <td className="orgaSheet-case orgaSheet-data__hours">
            <h4>Horaires</h4>
            <div className="orgaSheet-data__hoursDetails">
              <p>
                <span className="orgaSheet-data__daysOn">Lundi</span>9h-12h /
                14h-16h
              </p>
              <p>
                <span className="orgaSheet-data__daysOn">Mardi</span>9h-12h /
                14h-16h
              </p>
              <p>
                <span className="orgaSheet-data__daysOn">Mercredi</span>9h-12h /
                14h-16h
              </p>
              <p>
                <span className="orgaSheet-data__daysOn">Jeudi</span>9h-12h /
                14h-16h
              </p>
              <p>
                <span className="orgaSheet-data__daysOn">Vendredi</span>9h-12h /
                14h-16h
              </p>
              <p>
                <span className="orgaSheet-data__daysOff">Samedi</span>Fermé
              </p>
              <p>
                <span className="orgaSheet-data__daysOff">Dimanche</span>Fermé
              </p>
            </div>
          </td>
          <td className="orgaSheet-case">
            <h4>Infos, alerte</h4>
            <p>
              Fermeture le troisième dimanche de la quatrième année du
              calendrier maya postcolonial si y&apos;a pas grève à la SNCF
            </p>
          </td>
        </table>
      </article>
      <article className="orgaSheet-card orgaSheet-services">
        <h3>Services disponibles</h3>
        <ul className="orgaSheet-services__list">
          <li className="orgaSheet-services__serviceCard">
            <h1 className="serviceCard-header">Acceuil de jour</h1>
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
              <div className="serviceCard-data__contacts">
                <div className="data-contacts__header">
                  <h4>Contact 1</h4>
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
                </div>
                <div className="data-contacts__details">
                  <div className="data-contacts__infos">
                    <p className="data-contacts__nom">Michel Larem</p>
                    <p className="data-contacts__fonction">Assistant social</p>
                  </div>
                  <div className="data-contacts__name">
                    <p className="data-contacts__mail">06 25 65 45 78</p>
                    <p className="data-contacts__tel">laprem@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="orgaSheet-services__serviceCard">
            <h1 className="serviceCard-header">Acceuil de jour</h1>
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
              <div className="serviceCard-data__contacts">
                <div className="data-contacts__header">
                  <h4>Contact 1</h4>
                  <td className="contacts-roles">
                    <span className="contacts-roles__role contacts-roles__public">
                      public
                    </span>
                    <span className="contacts-roles__role contacts-roles__actualisation">
                      actualisation
                    </span>
                  </td>
                </div>
                <div className="data-contacts__details">
                  <div className="data-contacts__infos">
                    <p className="data-contacts__nom">Michel Larem</p>
                    <p className="data-contacts__fonction">Assistant social</p>
                  </div>
                  <div className="data-contacts__name">
                    <p className="data-contacts__mail">06 25 65 45 78</p>
                    <p className="data-contacts__tel">laprem@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="orgaSheet-services__serviceCard">
            <h1 className="serviceCard-header">Acceuil de jour</h1>
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
              <div className="serviceCard-data__contacts">
                <div className="data-contacts__header">
                  <h4>Contact 1</h4>
                  <td className="contacts-roles">
                    <span className="contacts-roles__role contacts-roles__public">
                      public
                    </span>
                  </td>
                </div>
                <div className="data-contacts__details">
                  <div className="data-contacts__infos">
                    <p className="data-contacts__nom">Michel Larem</p>
                    <p className="data-contacts__fonction">Assistant social</p>
                  </div>
                  <div className="data-contacts__name">
                    <p className="data-contacts__mail">06 25 65 45 78</p>
                    <p className="data-contacts__tel">laprem@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="serviceCard-data__contacts">
                <div className="data-contacts__header">
                  <h4>Contact 2</h4>
                  <td className="contacts-roles">
                    <span className="contacts-roles__role contacts-roles__actualisation">
                      actualisation
                    </span>
                    <span className="contacts-roles__role contacts-roles__prive">
                      privé
                    </span>
                  </td>
                </div>
                <div className="data-contacts__details">
                  <div className="data-contacts__infos">
                    <p className="data-contacts__nom">Michel Larem</p>
                    <p className="data-contacts__fonction">Assistant social</p>
                  </div>
                  <div className="data-contacts__name">
                    <p className="data-contacts__mail">06 25 65 45 78</p>
                    <p className="data-contacts__tel">laprem@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default OrgaSheet;
