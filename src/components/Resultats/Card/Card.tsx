import { Link } from 'react-router-dom';

import { Organism } from '../../../@types/organism';
import Icon from '../../../ui/icon/icon';
import './Card.scss';

interface OrganismProps {
  organism: Organism;
  map_id: number;
}
const categories = [
  { id: 1, value: 'acceuil-de-jour', isCheck: false },
  { id: 2, value: 'accueil-et-orientation', isCheck: false },
  { id: 3, value: 'bagagerie', isCheck: false },
  { id: 4, value: 'manger', isCheck: true },
  { id: 5, value: 'permanences-sociales', isCheck: false },
  { id: 6, value: 'retablissement-des-liens', isCheck: false },
];

function Card({ organism, map_id }: OrganismProps) {
  const { services } = organism;
  const tags = [
    ...new Set(services.map((service) => service.categorie_id.tag)),
  ].sort();

  console.log(tags);

  return (
    <div className="card_container">
      <div className="card_container_left">
        <div className="card_container_left-upper">
          <div className="card_container_left-upper_top">
            <div className="card_container_left-upper_position-id">
              <p>{map_id}</p>
            </div>
            <div className="card_container_left-upper_organization-infos">
              <div className="card_container_left-upper_title">
                {organism.name}
              </div>
              <span className="card_container_left-upper_address">
                {organism.address}
              </span>
            </div>
          </div>
        </div>
        <div className="card_container_left-upper_description">
          {organism.translations[0].description}
        </div>
        <div className="card_container_left-lower">
          {/* link to à modifier */}
          <Link
            className="card_container_left-lower_more-infos-link"
            to={`/organisme/${organism.slug}`}
          >
            <Icon icon="plus" size="14px" /> En savoir plus
          </Link>
          <div className="card_container_left-lower_categories">
            {categories.map((e) => (
              <Icon
                key={e.id}
                className={`card_container_left-lower_categories_item${
                  e.isCheck ? '--check' : ''
                }`}
                icon={e.value}
                size="30px"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="card_container_right">
        <Link
          // to="geo:38.62464092991612,-90.18476128578186"
          to={`https://www.google.com/maps/search/?api=1&query=${47.5951518}%2C${-122.3316393}`}
          target="_blank"
          className="card_container_right_go"
        >
          <Icon icon="directions_walk" size="1.2rem" /> <p>J&apos;y vais !</p>
        </Link>
        <Link to="tel:+33534364095" className="card_container_right_contact">
          <Icon icon="phone" size="1.2rem" /> <p>{organism.phone}</p>
        </Link>
      </div>
    </div>
  );
}

export default Card;
