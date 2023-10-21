import { useState } from 'react';
import styles from './Menu.module.scss';

interface MenuProps {
  isActiveMap: boolean;
  setIsActiveMap: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ isActiveMap, setIsActiveMap }: MenuProps) {
  const [isActiveFilters, setIsActiveFilters] = useState(false);

  return (
    <div className={styles.resultsMenu}>
      {!isActiveMap && (
        <div className={styles.group}>
          <i className={`${styles.group__icon} las la-map`} />
          <button
            type="button"
            className={styles.group}
            onClick={() => setIsActiveMap(!isActiveMap)}
          >
            Carte
          </button>
        </div>
      )}
      {isActiveMap && (
        <div className={styles.group}>
          <i className={`${styles.group__icon} las la-list`} />
          <button type="button" onClick={() => setIsActiveMap(!isActiveMap)}>
            Résultats
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;
