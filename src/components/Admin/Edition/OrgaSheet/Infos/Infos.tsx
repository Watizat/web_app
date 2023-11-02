import { useState } from 'react';
import { useAppSelector } from '../../../../../hooks/redux';
import ModalEditInfos from '../../../../Modals/ModalEditInfos';
import styles from './Infos.module.scss';
import orgaSheet from '../OrgaSheet.module.scss';

function Infos() {
  const [isModalActive, setIsModalActive] = useState(false);
  const organism = useAppSelector((state) => state.admin.organism);

  if (organism === null) {
    return <span>Une erreur s&apos;est produite.</span>;
  }

  return (
    <article className={`${orgaSheet.orgaSheet_card} ${styles.infos}`}>
      {isModalActive && (
        <ModalEditInfos
          setIsModalActive={setIsModalActive}
          organism={organism}
        />
      )}

      <span className={styles.infos_titleBar}>
        <h1>{organism.name}</h1>
        <button
          type="button"
          className={orgaSheet.orgaSheet_card__menu}
          onClick={() => setIsModalActive(true)}
        >
          <i className="las la-edit" />
        </button>
      </span>

      <ul className={styles.infos_list}>
        <li className={orgaSheet.orgaSheet_case}>
          <h4 className={styles.infos_list__title}>Adresse</h4>
          <p className={styles.infos_list__text}>{organism.address}</p>
        </li>
        <li className={orgaSheet.orgaSheet_case}>
          <h4 className={styles.infos_list__title}>Ville</h4>
          <p className={styles.infos_list__text}>{organism.city}</p>
        </li>
        <li className={orgaSheet.orgaSheet_case}>
          <h4 className={styles.infos_list__title}>Code postal</h4>
          <p className={styles.infos_list__text}>{organism.zipcode}</p>
        </li>
        <li className={orgaSheet.orgaSheet_case}>
          <h4 className={styles.infos_list__title}>Site web</h4>
          <p className={styles.infos_list__text}>{organism.website}</p>
        </li>
        <li className={orgaSheet.orgaSheet_case}>
          <h4 className={styles.infos_list__title}>Télephone</h4>
          <p className={styles.infos_list__text}>{organism.phone}</p>
        </li>
        <li className={orgaSheet.orgaSheet_case}>
          <h4 className={styles.infos_list__title}>Email</h4>
          <p className={styles.infos_list__text}>{organism.mail}</p>
        </li>
      </ul>
    </article>
  );
}

export default Infos;
