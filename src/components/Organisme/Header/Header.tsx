import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useAppSelector } from '../../../hooks/redux';
import Icon from '../../../ui/icon/icon';
import './Header.scss';

function Header() {
  const [position, setPosition] = useState({ lat: 43.6, lng: 1.433333 });
  const organism = useAppSelector((state) => state.organism.organism);

  const tags = [
    ...new Set(organism.services.map((service) => service.categorie_id.tag)),
  ].sort();

  const categories = tags.map((tag, index) => ({
    id: index + 1,
    value: tag,
  }));
  console.log(tags);

  if (organism === null) {
    return <span>Erreur</span>;
  }

  return (
    <div className="organisme-header">
      <div className="organisme-details">
        <h2>{organism.name}</h2>
        <p>{organism.translations[0].description}</p>
        <div className="organisme-details-categories">
          {categories.map((categorie) => (
            <Icon
              key={categorie.id}
              className="organisme-details-categories-item"
              icon={categorie.value}
              size="30px"
            />
          ))}
        </div>
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
