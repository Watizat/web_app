import { useState } from 'react';
import { Organism } from '../../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setAdminOrganism } from '../../../../store/reducers/admin';
import styles from './OrgaList.module.scss';
// import OrgaListSearch from './Search/Search';

function OrgaList() {
  const organisms = useAppSelector((state) => state.admin.organisms);
  const isLoading = useAppSelector((state) => state.admin.isLoading);
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState<number | null>(null);

  function handleClick(organism: Organism) {
    dispatch(setAdminOrganism(organism.id));
    setIsActive(organism.id);
  }

  return (
    <section className={styles.organisms}>
      {/* <OrgaListSearch /> */}
      <ul className={styles.organisms_list}>
        {isLoading && <span />}
        {organisms.map((organism) => (
          <li key={organism.id} className={styles.organisms_card}>
            <button
              type="button"
              onClick={() => handleClick(organism)}
              className={
                isActive === organism.id
                  ? `${styles.organisms_button} ${styles.selected}`
                  : styles.organisms_button
              }
            >
              <div className={styles.organisms_card__name}>{organism.name}</div>
              <div className={styles.organisms_card__adress}>
                {organism.address}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OrgaList;
