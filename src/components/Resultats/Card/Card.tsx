import { Link } from 'react-router-dom';
import { Organism } from '../../../@types/organism';
import Icon from '../../../ui/icon/icon';
import './Card.scss';

interface OrganismProps {
  organism: Organism;
  map_id: number;
  categoryFilter: string[];
}

interface Categories {
  id: number;
  value: string;
  name: string;
  isCheck: boolean;
}

function Card({ organism, map_id, categoryFilter }: OrganismProps) {
  const { services } = organism;

  const categoriesTagName = [
    ...new Set(
      services.map((service) => {
        return {
          name: service.categorie_id.translations[0].name,
          tag: service.categorie_id.tag,
        };
      })
    ),
  ].sort();

  const categories = categoriesTagName.map((tag, index) => ({
    id: index + 1,
    value: tag.tag,
    name: tag.name,
    isCheck: categoryFilter.includes(tag.tag),
  }));

  const uniqueCategories: { [key: string]: Categories } = {};

  categories.forEach((obj) => {
    if (!uniqueCategories[obj.name]) {
      uniqueCategories[obj.name] = obj;
    }
  });

  const uniqueCategoriesArray = Object.values(uniqueCategories);

  return (
    <div className="resultsCard" id={organism.id.toString()}>
      <div className="Left">
        <Link to={`/organisme/${organism.slug}`}>
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
        </Link>
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
            {uniqueCategoriesArray.map((categorie) => (
              <div className="tooltip" key={categorie.id}>
                <Icon
                  className={`Left-lower__categories___item${
                    categorie.isCheck ? '--check' : ''
                  }`}
                  icon={categorie.value}
                />
                <span className="tooltiptext">{categorie.name}</span>
              </div>
            ))}
          </div>
        </div>

        {organism.translations[0]?.infos_alerte && (
          <fieldset className="Left-lower__infosalertes">
            <span>{organism.translations[0]?.infos_alerte}</span>
            <legend>Info & alertes</legend>
          </fieldset>
        )}
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
