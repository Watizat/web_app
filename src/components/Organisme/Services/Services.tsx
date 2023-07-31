import { Organism } from '../../../@types/organism';
import { useAppSelector } from '../../../hooks/redux';
import Card from './Card/Card';
import './Services.scss';

function Services() {
  const organism = useAppSelector(
    (state) => state.organism.organism as Organism
  );
  return (
    <div className="organisme-services">
      <h3>Services proposés</h3>
      <div className="organisme-services-contentcards">
        {organism.services.map((service) => (
          <Card key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
