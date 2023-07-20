import { useState } from 'react';
import classNames from 'classnames';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import Container from '../Container/Container';
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
        <button type="button" onClick={() => navigate(-1)}>
          Retour aux résultats
        </button>
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
            </article>
            <article>
              <h3>Horaires</h3>
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
            </article>
            <article>
              <h3>Accès en transports</h3>
            </article>
          </div>
          <div className="organisme-services">
            <h3>Services proposés</h3>
            <div className="organisme-services--cards">
              <article>
                <button
                  className="organisme-services--cards-header"
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
                  className={classNames('organisme-services--cards-content', {
                    'organisme-services--cards-content--visible': isOpen,
                  })}
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
        </section>
      </Container>
    </main>
  );
}

export default Organisme;
