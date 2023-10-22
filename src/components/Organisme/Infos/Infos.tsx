import { useAppSelector } from '../../../hooks/redux';
import Contact from './Contact/Contact';
import Schedule from './Schedule/Schedule';
import Transport from './Transport/Transport';
import styles from './Infos.module.scss';
import orga from '../Organisme.module.scss';

function Infos() {
  const organism = useAppSelector((state) => state.organism.organism);

  if (organism === null) {
    return <span>Erreur</span>;
  }
  return (
    <div className={styles.infos}>
      <Contact />
      <article>
        <h3 className={orga.title}>Horaires</h3>
        {organism.schedules && organism.schedules.length > 0 ? (
          <Schedule schedule={organism.schedules} displayAll />
        ) : (
          <p style={{ color: 'red' }}>
            Il n&apos;y a pas d&apos;horaires enregistrés.
          </p>
        )}
      </article>
      <Transport />
    </div>
  );
}

export default Infos;
