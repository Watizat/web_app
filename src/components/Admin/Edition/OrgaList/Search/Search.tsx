import styles from './Search.module.scss';
import orgaList from '../OrgaList.module.scss';

function listSearch() {
  return (
    <li className={`${orgaList.organisms_card} ${styles.list_searchCard}`}>
      <input
        id="list-searchCard__search"
        className={styles.list_searchCard__search}
        type="search"
        placeholder="Rechercher..."
      />
      <div className={styles.list_searchCard__groupIcons}>
        <button type="button" className={styles.list_searchCard__button}>
          <p className=" list-searchCard__text">Trier</p>
          <i
            className={`las la-sort-amount-down ${styles.list_searchCard__logo}`}
          />
        </button>
        <button type="button" className={styles.list_searchCard__button}>
          <p className={styles.list_searchCard__text}>Filtrer</p>
          <i className={`las la-filter ${styles.list_searchCard__logo}`} />
        </button>
      </div>
    </li>
  );
}

export default listSearch;
