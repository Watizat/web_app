import './OrgaListSearch.scss';

function OrgaListSearch() {
  return (
    <li className="orgaList-card orgaList-searchCard">
      <input
        id="orgaList-searchCard__search"
        type="search"
        placeholder="Rechercher..."
      />
      <button type="button">
        <i className="las la-sort-amount-down orgaList-searchCard__logo" />
      </button>
      <button type="button">
        <i className="las la-filter orgaList-searchCard__logo" />
      </button>
    </li>
  );
}

export default OrgaListSearch;
