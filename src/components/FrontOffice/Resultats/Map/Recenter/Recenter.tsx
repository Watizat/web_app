import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

// Typage temporaire à corriger
export default function Recenter({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);
  return null;
}
