import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Organism } from '../../../@types/organism';
import Icon from '../../../ui/icon/icon';
import './Card.scss';

interface OrganismProps {
  organism: Organism;
  map_id: number;
  categoryFilter: string[];
}

function Card({ organism, map_id, categoryFilter }: OrganismProps) {
  const { services } = organism;
  const tags = [
    ...new Set(services.map((service) => service.categorie_id.tag)),
  ].sort();

  const categories = tags.map((tag, index) => ({
    id: index + 1,
    value: tag,
    isCheck: categoryFilter.includes(tag),
  }));

  return (
    <div className="resultsCard" id={organism.id.toString()}>
      <div className="Left">
        <div className="Left-upper">
          <div className="Left-upper__position-id">
            <p>{map_id}</p>
          </div>
          <div className="Left-upper__organizationInfos">
            <div className="Left-upper__organizationInfos___title">
              {organism.name}
            </div>
            <span className="Left-upper__organizationInfos___address">
              {organism.address}
            </span>
          </div>
        </div>
        <div className="Left-upper__description">
          {organism.translations[0]?.description}
        </div>
        <div className="Left-lower">
          <Link
            className="Left-lower__moreInfos"
            to={`/organisme/${organism.slug}`}
          >
            <Icon icon="plus" className="Left-lower__moreInfos-icon" /> En
            savoir plus
          </Link>
          <div className="Left-lower__categories">
            {categories.map((categorie) => (
              <Icon
                key={categorie.id}
                className={`Left-lower__categories___item${
                  categorie.isCheck ? '--check' : ''
                }`}
                icon={categorie.value}
              />
            ))}
          </div>
        </div>
        <span>{organism.translations[0]?.infos_alerte}</span>
      </div>
      <div className="Right">
        <Link
          to={`https://www.google.com/maps/search/?api=1&query=${organism.latitude}%2C${organism.longitude}`}
          target="_blank"
          className="Right-btn btn btn-sucess btn-flat"
        >
          <Icon icon="directions_walk" size="1.2rem" /> <p>J&apos;y vais !</p>
        </Link>
        <Link
          to={`tel:${organism.phone}`}
          className="Right-btn btn btn-info btn-flat"
        >
          <Icon icon="phone" size="1.2rem" /> <p>{organism.phone}</p>
        </Link>
      </div>
    </div>
  );
}

export default Card;
