import L from 'leaflet';
import { useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Organism } from '../../../@types/organism';
import { useAppSelector } from '../../../hooks/redux';
import Icon from '../../../ui/icon/icon';
import styles from './Header.module.scss';

function Header() {
  const [position, setPosition] = useState({ lat: 43.6, lng: 1.433333 });
  const organism = useAppSelector(
    (state) => state.organism.organism as Organism
  );

  const tags = [
    ...new Set(organism.services.map((service) => service.categorie_id.tag)),
  ].sort();

  const categories = tags.map((tag, index) => ({
    id: index + 1,
    value: tag,
  }));

  return (
    <div className={styles.header}>
      <div className={styles.details}>
        <h2>{organism.name}</h2>{' '}
        <p className={styles.details_address}>
          {organism.address} - <span>{organism.zipcode}</span>{' '}
          <span>{organism.city}</span>
        </p>
        <div className={styles.details_categories}>
          {categories.map((categorie) => (
            <Icon
              key={categorie.id}
              className={styles.details_categories__item}
              icon={categorie.value}
            />
          ))}
        </div>
        <p className={styles.details_description}>
          {organism.translations[0].description}
        </p>
        {organism.translations[0]?.infos_alerte && (
          <fieldset className={styles.details_infosalertes}>
            <span>{organism.translations[0]?.infos_alerte}</span>
            <legend>Info & alertes</legend>
          </fieldset>
        )}
      </div>
      <MapContainer
        className={styles.map}
        center={
          organism.latitude ? [organism.latitude, organism.longitude] : position
        }
        zoom={15}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
        />
        {/* <Recenter lat={position.lat} lng={position.lng} /> */}
        {organism.latitude && (
          <Marker
            key={organism.id}
            position={[organism.latitude, organism.longitude]}
            icon={
              new L.DivIcon({
                className: styles.customIcon,
                html: `<div></div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 33.5],
                popupAnchor: [0, -30],
              })
            }
          />
        )}
      </MapContainer>
    </div>
  );
}

export default Header;
