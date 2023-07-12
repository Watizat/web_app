import { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import './Map.scss';
// import Recenter from './Recenter/recenter';
// import Recenter from './Marker/Marker';

function Map() {
  const [position, setPosition] = useState({ lat: 43.6, lng: 1.433333 });
  const [userPosition, setUserPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newUserPos = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setUserPosition(newUserPos);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const organismes = [
    {
      lat: 43.5968,
      lng: 1.424484,
      title: `PÔLE D'ACCUEIL, D'INFORMATION, D'ORIENTATION (PAIO)`,
    },
    {
      lat: 43.635534,
      lng: 1.483051,
      title: `ADELPHITÉ PAR CVH - SPADA`,
    },
    {
      lat: 43.590159,
      lng: 1.438838,
      title: `ESPACE SOCIAL DU GRAND-RAMIER
`,
    },
    {
      lat: 43.576048,
      lng: 1.455174,
      title: `DROITS DU CŒUR
`,
    },
  ];

  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Recenter lat={position.lat} lng={position.lng} /> */}
      <Marker position={userPosition} />
      {organismes.map((organisme) => {
        return (
          <Marker
            key={organisme.title}
            position={[organisme.lat, organisme.lng]}
            title={organisme.title}
          />
        );
      })}
    </MapContainer>
  );
}

export default Map;
