import { Link } from 'react-router-dom';
import styles from './Links.module.scss';
import links from './linksData';

function Links() {
  return (
    <div className={styles.links}>
      <div className={styles.links_sub}>
        {links
          .filter((e) => e.position === 'left')
          .map((e) => (
            <Link key={e.name} to={e.to} target={e.target}>
              {e.name}
            </Link>
          ))}
      </div>
      <div className={styles.links_sub}>
        {links
          .filter((e) => e.position === 'right')
          .map((e) => (
            <Link key={e.name} to={e.to} target={e.target}>
              {e.name}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Links;
