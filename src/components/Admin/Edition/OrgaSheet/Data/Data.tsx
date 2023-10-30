import { useState } from 'react';
import { useAppSelector } from '../../../../../hooks/redux';
import ModalEditData from '../../../Modal/ModalEditData';
import Schedules from '../../../Schedules/Schedules';
import styles from './Data.module.scss';
import by from '../OrgaSheet.module.scss';

function Data() {
  const organism = useAppSelector((state) => state.admin.organism);
  const [isActive, setIsActive] = useState(false);
  if (organism === null) {
    return <span>Erreur</span>;
  }

  return (
    <article className={`${by.orgaSheet_card} ${styles.data}`}>
      {isActive && (
        <ModalEditData setIsActive={setIsActive} organism={organism} />
      )}

      <span className={by.orgaSheet_card__titleBar}>
        <h3 className={by.orgaSheet_card__title}>Informations génerales</h3>
        <button
          type="button"
          className={by.orgaSheet_card__menu}
          onClick={() => setIsActive(true)}
        >
          <i className="las la-edit" />
        </button>
      </span>

      <ul className={styles.data_list}>
        <fieldset
          className={`${by.orgaSheet_case} ${styles.data_case} ${styles.data__access}`}
        >
          <legend>Accès</legend>
          <h4 className={styles.h4}>Accés</h4>
          <div className={styles.data_accessDetails}>
            <label className={styles.data_pmr}>
              <input type="checkbox" disabled checked={organism.pmr} />
              Accessible PSH /PMR
            </label>
            <label className={styles.data_pmr}>
              <input type="checkbox" disabled checked={organism.animals} />
              Animaux admis
            </label>
          </div>
        </fieldset>
        <fieldset className={`${by.orgaSheet_case} ${styles.data_case}`}>
          <legend>Description</legend>
          <h4 className={styles.h4}>Description</h4>
          <p>{organism.translations[0]?.description}</p>
        </fieldset>
        <fieldset
          className={`${by.orgaSheet_case} ${styles.data_case} ${styles.data_hours}`}
        >
          <legend>Horaires</legend>
          <h4 className={styles.h4}>Horaires</h4>
          <div className={styles.data_hoursDetails}>
            {organism.schedules && organism.schedules.length > 0 ? (
              <Schedules schedule={organism.schedules} displayAll />
            ) : (
              <p style={{ color: 'red' }}>
                Il n&apos;y a pas d&apos;horaires enregistrés.
              </p>
            )}
          </div>
        </fieldset>
        <fieldset className={`${by.orgaSheet_case} ${styles.data_case}`}>
          <legend>Infos, alerte</legend>
          <h4 className={styles.h4}>Infos, alerte</h4>
          <p>{organism.translations[0]?.infos_alerte}</p>
        </fieldset>
      </ul>
    </article>
  );
}

export default Data;
