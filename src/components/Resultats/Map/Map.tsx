import { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useAppSelector } from '../../../hooks/redux';
import './Map.scss';
// import Recenter from './Recenter/recenter';
// import Recenter from './Marker/Marker';

function Map() {
  const [position, setPosition] = useState({ lat: 43.6, lng: 1.433333 });
  const [userPosition, setUserPosition] = useState({ lat: 0, lng: 0 });
  const [navigatorGps, setNavigatorGps] = useState(false);
  const organisms = useAppSelector((state) => state.filteredOrganisms);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newUserPos = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setUserPosition(newUserPos);
        setNavigatorGps(true);
      },
      (err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    );
  }, []);

  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Recenter lat={userPosition.lat} lng={userPosition.lng} /> */}
      {navigatorGps && <Marker position={userPosition} />}

      {/* {organismes.map((organisme) => {
        return (
          <Marker
            key={organisme.title}
            position={[organisme.lat, organisme.lng]}
            title={organisme.title}
          />
        );
      })} */}
    </MapContainer>
  );
}

export default Map;
