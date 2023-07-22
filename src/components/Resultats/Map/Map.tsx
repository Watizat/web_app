import L from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setUserPosition } from '../../../store/reducers/organisms';
import './Map.scss';

function Map() {
  const [position, setPosition] = useState({ lat: 43.6, lng: 1.433333 });
  const [navigatorGps, setNavigatorGps] = useState(false);
  const organisms = useAppSelector((state) => state.filteredOrganisms);
  const userPosition = useAppSelector((state) => state.userPosition);
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newUserPos = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        dispatch(setUserPosition(newUserPos));
        setNavigatorGps(true);
      },
      (err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    );
  }, [dispatch]);
  const me = new L.DivIcon({
    className: 'custom-me',
    html: `<div></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 36],
  });

  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {navigatorGps && <Marker position={userPosition} icon={me} />}

      {organisms.map((organism, index) => {
        const customIcon = new L.DivIcon({
          className: 'custom-icon',
          html: `<div>${index + 1}</div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 33.5],
          popupAnchor: [0, -30],
        });
        return (
          <Marker
            key={organism.id}
            position={[organism.latitude, organism.longitude]}
            icon={customIcon}
          >
            {' '}
            <Popup>
              <Link to={`/organisme/${organism.slug}`}>{organism.name}</Link>
            </Popup>
          </Marker>
        );
      })}
      {/*       {organisms.map((organism) => (
        <Marker
          key={organism.id}
          position={[organism.latitude, organism.longitude]}
        >
          <Popup>
            <Link to={`/organisme/${organism.slug}`}>{organism.name}</Link>
          </Popup>
        </Marker>
      ))} */}
    </MapContainer>
  );
}

export default Map;
