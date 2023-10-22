import { Organism } from '../../../@types/organism';
import { useAppSelector } from '../../../hooks/redux';
import Card from './Card/Card';
import styles from './Services.module.scss';
import orga from '../Organisme.module.scss';

function Services() {
  const organism = useAppSelector(
    (state) => state.organism.organism as Organism
  );
  return (
    <div className={styles.services}>
      <h3 className={orga.title}>Services proposés</h3>
      <div className={styles.contentCards}>
        {organism.services.map((service) => (
          <Card key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
