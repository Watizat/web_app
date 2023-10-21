import { Link } from 'react-router-dom';
import { Organism } from '../../../@types/organism';
import Icon from '../../../ui/icon/icon';
import styles from './Card.module.scss';

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
    <div className={styles.card} id={organism.id.toString()}>
      <div className={styles.left}>
        <Link to={`/organisme/${organism.slug}`}>
          <div className={styles.left_upper}>
            <div className={styles.left_upper__positionId}>
              <p>{map_id}</p>
            </div>
            <div className={styles.left_upper__organizationInfos}>
              <div className={styles.left_upper__organizationInfos___title}>
                {organism.name}
              </div>
              <span className={styles.left_upper__organizationInfos___address}>
                {organism.address}
              </span>
            </div>
          </div>
        </Link>
        <div className={styles.left_upper__description}>
          {organism.translations[0]?.description}
        </div>
        <div className={styles.left_lower}>
          <Link
            className={styles.left_lower__moreInfos}
            to={`/organisme/${organism.slug}`}
          >
            <Icon icon="plus" className={styles.left_lower__moreInfos___icon} />{' '}
            En savoir plus
          </Link>
          <div className={styles.left_lower__categories}>
            {uniqueCategoriesArray.map((categorie) => (
              <div className="tooltip" key={categorie.id}>
                <Icon
                  className={styles.left_lower__categories___item}
                  icon={categorie.value}
                />
                <span className="tooltiptext">{categorie.name}</span>
              </div>
            ))}
          </div>
        </div>

        {organism.translations[0]?.infos_alerte && (
          <fieldset className={styles.left_lower__infosalertes}>
            <span>{organism.translations[0]?.infos_alerte}</span>
            <legend>Info & alertes</legend>
          </fieldset>
        )}
      </div>
      <div className={styles.right}>
        <Link
          to={`https://www.google.com/maps/search/?api=1&query=${organism.latitude}%2C${organism.longitude}`}
          target="_blank"
          className={`${styles.right_btn} btn btn-sucess btn-flat`}
        >
          <Icon icon="directions_walk" size="1.2rem" /> <p>J&apos;y vais !</p>
        </Link>
        <Link
          to={`tel:${organism.phone}`}
          className={`${styles.right_btn} btn btn-info btn-flat`}
        >
          <Icon icon="phone" size="1.2rem" /> <p>{organism.phone}</p>
        </Link>
      </div>
    </div>
  );
}

export default Card;
