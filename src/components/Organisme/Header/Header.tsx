import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Organism } from '../../../@types/organism';
import { useAppSelector } from '../../../hooks/redux';
import './Header.scss';

function Header() {
  const [position, setPosition] = useState({ lat: 43.6, lng: 1.433333 });
  const organism = useAppSelector((state) => state.organism.organism);

  if (organism === null) {
    return <span>Erreur</span>;
  }

  return (
    <div className="organisme-header">
      <div className="organisme-details">
        <h2>{organism.name}</h2>/<span>icons</span>
        <p>{organism.translations[0].description}</p>
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
