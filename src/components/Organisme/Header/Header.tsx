import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './Header.scss';

function Header() {
  const [position, setPosition] = useState({ lat: 43.6, lng: 1.433333 });

  return (
    <div className="organisme-header">
      <div className="organisme-details">
        <h2>Pôle d’accueil, d’information et d’orientation (PAIO)</h2>
        <span>icons</span>
        <p>
          Écoute, renseignement et orientation pour les personnes sans domicile
          fixe n’ayant pas de référent social. Service social public qui apporte
          une aide ponctuelle sur les besoins de première nécessité et
          l&apos;accès aux droits. Pour assurer un suivi, une orientation vers
          un référent social aura lieu. Permanence téléphonique du lundi au
          vendredi 13h-17h. Pour prendre rendez-vous, venir sur place le matin
          (9h-12h), pas de rdv donné par téléphone
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
  );
}

export default Header;
