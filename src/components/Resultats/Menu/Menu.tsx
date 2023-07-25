import './Menu.scss';

function Menu() {
  return (
    <div id="resultsMenu">
      <div className="resultsMenu-group resultsMenu-results">
        <i className="resultsMenu-group__icon las la-list" />
        <button type="button" className="resultMenu-group_button">
          Résultats
        </button>
      </div>
      <div className="resultsMenu-middle">|</div>
      <div className="resultsMenu-group resultsMenu-filter">
        <i className="resultsMenu-group__icon las la-filter" />
        <button type="button" className="resultsMenu-group__button">
          Filtres
        </button>
      </div>
      <div className="resultsMenu-middle">|</div>
      <div className="resultsMenu-group resultsMenu-map">
        <i className="resultsMenu-group__icon las la-map" />
        <button type="button" className="resultsMenu-group__button">
          Carte
        </button>
      </div>
    </div>
  );
}

export default Menu;
