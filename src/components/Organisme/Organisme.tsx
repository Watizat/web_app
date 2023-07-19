import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import Container from '../Container/Container';
import './Organisme.scss';

function Organisme() {
  const [position, setPosition] = useState({ lat: 43.6, lng: 1.433333 });

  const navigate = useNavigate();
  return (
    <main className="organisme__container">
      <Container>
        <button type="button" onClick={() => navigate(-1)}>
          Retour aux résultats
        </button>
        <section className="organisme">
          <div className="organisme__header">
            <div className="organisme__details">
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
          <div className="organisme__infos">
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
          <div className="organisme__services">
            <article>
              <h4>Repas</h4>
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
              <h4>Repas</h4>
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
              <h4>Repas</h4>
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
              <h4>Repas</h4>
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
          </div>
        </section>
      </Container>
    </main>
  );
}

export default Organisme;
