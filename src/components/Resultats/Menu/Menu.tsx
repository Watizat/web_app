import { useState } from 'react';
import './Menu.scss';

interface MenuProps {
  isActiveMap: boolean;
  setIsActiveMap: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ isActiveMap, setIsActiveMap }: MenuProps) {
  const [isActiveFilters, setIsActiveFilters] = useState(false);

  return (
    <div id="resultsMenu">
      {!isActiveMap && (
        <div className="resultsMenu-group resultsMenu-map">
          <i className="resultsMenu-group__icon las la-map" />
          <button
            type="button"
            className="resultsMenu-group__button"
            onClick={() => setIsActiveMap(!isActiveMap)}
          >
            Carte
          </button>
        </div>
      )}
      {isActiveMap && (
        <div className="resultsMenu-group resultsMenu-results">
          <i className="resultsMenu-group__icon las la-list" />
          <button
            type="button"
            className="resultMenu-group_button"
            onClick={() => setIsActiveMap(!isActiveMap)}
          >
            Résultats
          </button>
        </div>
      )}
      {/* <div className="resultsMenu-separator">|</div>
      <div className="resultsMenu-group resultsMenu-filter">
        <i className="resultsMenu-group__icon las la-filter" />
        <button
          type="button"
          className="resultsMenu-group__button"
          onClick={() => setIsActiveFilters(true)}
        >
          Filtres
        </button>
      </div> */}
    </div>
  );
}

export default Menu;
