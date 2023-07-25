import { useAppSelector } from '../../../hooks/redux';
import Contact from './Contact/Contact';
import './Infos.scss';
import Schedule from './Schedule/Schedule';
import Transport from './Transport/Transport';

function Infos() {
  const organism = useAppSelector((state) => state.organism.organism);

  if (organism === null) {
    return <span>Erreur</span>;
  }
  return (
    <div className="organisme-infos">
      <Contact />
      {organism.schedules && organism.schedules.length > 0 ? (
        <Schedule schedule={organism.schedules} />
      ) : (
        <article>
          <h3>Horaires</h3>
          <p style={{ color: 'red' }}>
            Il n&apos;y a pas d&apos;horaires enregistrés.
          </p>
        </article>
      )}
      <Transport />
    </div>
  );
}

export default Infos;
