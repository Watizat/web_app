import { Link, useSearchParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Organism } from '../../../@types/organism';
import Icon from '../../../ui/icon/icon';
import './Card.scss';
import { useAppSelector } from '../../../hooks/redux';

interface OrganismProps {
  organism: Organism;
  map_id: number;
  selected: string[];
}

function Card({ organism, map_id, selected }: OrganismProps) {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [isVisible, setIsVisible] = useState(true);
  const { services } = organism;
  const tags = [
    ...new Set(services.map((service) => service.categorie_id.tag)),
  ].sort();

  const filteredCategories = [...selected, category];

  const test = useAppSelector((state) => state.categoryFilter);
  console.log([...test, category]);

  const categories = tags.map((tag, index) => ({
    id: index + 1,
    value: tag,
    isCheck: filteredCategories.includes(tag),
  }));

  const checkMatchCategories = (categories, selected) => {
    const filteredArray = categories.filter((categories) =>
      selected.includes(categories.value)
    );
    setIsVisible(filteredArray.length === selected.length);
  };

  useEffect(() => {
    checkMatchCategories(categories, selected);
  }, [categories, selected]);

  return (
    isVisible && (
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
            <Link
              className="card_container_left-lower_more-infos-link"
              to={`/organisme/${organism.slug}`}
            >
              <Icon icon="plus" size="14px" /> En savoir plus
            </Link>
            <div className="card_container_left-lower_categories">
              {categories.map((categorie) => (
                <Icon
                  key={categorie.id}
                  className={`card_container_left-lower_categories_item${
                    categorie.isCheck ? '--check' : ''
                  }`}
                  icon={categorie.value}
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
    )
  );
}

export default Card;
