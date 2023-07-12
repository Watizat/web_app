import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.scss';
import LocationMarker from './Marker/Marker';

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}

interface ErrorMessage {
  message: string;
}

function Map() {
  const [location, setLocation] = useState<number[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.');
      return;
    }

    function handleSuccess(position: Position) {
      const { latitude, longitude } = position.coords;
      setLocation([latitude, longitude]);
    }

    function handleError(errorMessage: ErrorMessage) {
      setError(errorMessage.message);
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return (
    <MapContainer center={[43.6, 1.4333]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
