import { useState } from 'react';
import classNames from 'classnames';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import Container from '../Container/Container';
import Icon from '../../ui/icon/icon';
import './Organisme.scss';

function Organisme() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpenSettings() {
    setIsOpen(!isOpen);
  }

  const [position, setPosition] = useState({ lat: 43.6, lng: 1.433333 });

  const navigate = useNavigate();
  return (
    <main className="organisme-container">
      <Container>
        <div className="breadcrumb">
          <button
            className="btn-primary"
            type="button"
            onClick={() => navigate(-1)}
          >
            <i className="las la-arrow-left" />
            Retour aux résultats
          </button>
          <ul>
            <a href="/">
              <li>Accueil</li>
            </a>
            <i className="las la-angle-right" />
            <a href="/resultats">
              <li>Résultats de recherche</li>
            </a>
            <i className="las la-angle-right" />
            <a href="/resultats/#" className="link-active">
              <li>Nom de l'organisme</li>
            </a>
          </ul>
        </div>
        <section className="organisme">
          <div className="organisme-header">
            <div className="organisme-details">
              <h2>Pôle d’accueil, d’information et d’orientation (PAIO)</h2>
              <span>icons</span>
              <p>
                Écoute, renseignement et orientation pour les personnes sans
                domicile fixe n’ayant pas de référent social. Service social
                public qui apporte une aide ponctuelle sur les besoins de
                première nécessité et l&apos;accès aux droits. Pour assurer un
                suivi, une orientation vers un référent social aura lieu.
                Permanence téléphonique du lundi au vendredi 13h-17h. Pour
                prendre rendez-vous, venir sur place le matin (9h-12h), pas de
                rdv donné par téléphone
              </p>
            </div>
            <MapContainer center={position} zoom={13}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {/* <Recenter lat={position.lat} lng={position.lng} /> */}
            </MapContainer>
          </div>
          <div className="organisme-infos">
            <article>
              <h3>Contact</h3>
              <div className="organisme-infos--maincontact">
                <p>66 bis avenue Étienne-Billières - 31100 Toulouse</p>
                <a href="#">00 00 00 00 00</a>
                <a href="#">mail@mail.com</a>
              </div>
              <div className="organisme-infos--othercontact">
                <p>Direction</p>
                <p>Jean-Claude Tartempion</p>
                <a href="#">00 00 00 00 00</a>
                <a href="#">mail@mail.com</a>
              </div>
            </article>
            <article>
              <h3>Horaires</h3>
              <table className="organisme-infos--schedule">
                <tr>
                  <td className="organisme-infos--schedule-day">Lundi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td className="organisme-infos--schedule-day">Mardi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td className="organisme-infos--schedule-day">Mercredi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td className="organisme-infos--schedule-day">Jeudi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td className="organisme-infos--schedule-day">Vendredi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td className="organisme-infos--schedule-day">Samedi</td>
                  <td>
                    <span>Fermé</span>
                  </td>
                </tr>
                <tr>
                  <td className="organisme-infos--schedule-day">Dimanche</td>
                  <td>
                    <span>Fermé</span>
                  </td>
                </tr>
              </table>
            </article>
            <article>
              <h3>Accès en transports</h3>
            </article>
          </div>
          <div className="organisme-services">
            <h3>Services proposés</h3>
            <div className="organisme-services-contentcards">
              <div className="organisme-services-contentcards--cards">
                <article>
                  <button
                    className={classNames(
                      'organisme-services-contentcards--cards-header',
                      {
                        'organisme-services-contentcards--cards-header--open':
                          isOpen,
                      }
                    )}
                    type="button"
                    onClick={handleOpenSettings}
                  >
                    <h4>
                      <i className="las la-utensils" /> Repas{' '}
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
                    <table>
                      <tr>
                        <td className="organisme-services-contentcards--cards-content-scheduleday">
                          Lundi
                        </td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="organisme-services-contentcards--cards-content-scheduleday">
                          Mardi
                        </td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="organisme-services-contentcards--cards-content-scheduleday">
                          Mercredi
                        </td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="organisme-services-contentcards--cards-content-scheduleday">
                          Jeudi
                        </td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="organisme-services-contentcards--cards-content-scheduleday">
                          Vendredi
                        </td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="organisme-services-contentcards--cards-content-scheduleday">
                          Samedi
                        </td>
                        <td>
                          <span>Fermé</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="organisme-services-contentcards--cards-content-scheduleday">
                          Dimanche
                        </td>
                        <td>
                          <span>Fermé</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </article>
              </div>
              <div className="organisme-services-contentcards--cards">
                <article>
                  <button
                    className="organisme-services-contentcards--cards-header"
                    type="button"
                    onClick={handleOpenSettings}
                  >
                    <h4>
                      <i className="las la-utensils" /> Repas{' '}
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
                      {
                        'is-visible': isOpen,
                      }
                    )}
                  >
                    <table>
                      <tr>
                        <td>Lundi</td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Mardi</td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Mercredi</td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Jeudi</td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Vendredi</td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Samedi</td>
                        <td>
                          <span>Fermé</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Dimanche</td>
                        <td>
                          <span>Fermé</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </article>
              </div>
              <div className="organisme-services-contentcards--cards">
                <article>
                  <button
                    className="organisme-services-contentcards--cards-header"
                    type="button"
                    onClick={handleOpenSettings}
                  >
                    <h4>
                      <i className="las la-utensils" /> Repas{' '}
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
                      {
                        'is-visible': isOpen,
                      }
                    )}
                  >
                    <table>
                      <tr>
                        <td>Lundi</td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Mardi</td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Mercredi</td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Jeudi</td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Vendredi</td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Samedi</td>
                        <td>
                          <span>Fermé</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Dimanche</td>
                        <td>
                          <span>Fermé</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </article>
              </div>
              <div className="organisme-services-contentcards--cards">
                <article>
                  <button
                    className="organisme-services-contentcards--cards-header"
                    type="button"
                    onClick={handleOpenSettings}
                  >
                    <h4>
                      <i className="las la-utensils" /> Repas{' '}
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
                      {
                        'is-visible': isOpen,
                      }
                    )}
                  >
                    <table>
                      <tr>
                        <td>Lundi</td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Mardi</td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Mercredi</td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Jeudi</td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Vendredi</td>
                        <td>
                          <span>9h-12h</span>/<span>14h-16h</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Samedi</td>
                        <td>
                          <span>Fermé</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Dimanche</td>
                        <td>
                          <span>Fermé</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}

export default Organisme;
