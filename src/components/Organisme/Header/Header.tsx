import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './Header.scss';

function Header() {
  const [position, setPosition] = useState({ lat: 43.6, lng: 1.433333 });
  return (
    <div className="organisme-header">
      <div className="organisme-details">
        <h2 />
        <span>icons</span>
        <p> </p>
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
