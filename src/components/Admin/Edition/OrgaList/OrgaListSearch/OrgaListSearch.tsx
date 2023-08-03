import './OrgaListSearch.scss';

function OrgaListSearch() {
  return (
    <li className="orgaList-card orgaList-searchCard">
      <input
        id="orgaList-searchCard__search"
        className="orgaList-searchCard__search"
        type="search"
        placeholder="Rechercher..."
      />
      <div className="orgaList-searchCard__groupIcons">
        <button type="button" className=" orgaList-searchCard__button">
          <p className=" orgaList-searchCard__text">Trier</p>
          <i className="las la-sort-amount-down orgaList-searchCard__logo" />
        </button>
        <button type="button" className=" orgaList-searchCard__button">
          <p className=" orgaList-searchCard__text">Filtrer</p>
          <i className="las la-filter orgaList-searchCard__logo" />
        </button>
      </div>
    </li>
  );
}

export default OrgaListSearch;
