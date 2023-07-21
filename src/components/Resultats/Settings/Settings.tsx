import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  fetchCategories,
  filterCategories,
} from '../../../store/reducers/organisms';
import Icon from '../../../ui/icon/icon';
import './Settings.scss';

function Settings() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const categoryParams = searchParams.get('category') as string;

  const categories = useAppSelector((state) => state.categories);
  const categoryFilter = useAppSelector((state) => state.categoryFilter);
  const organisms = useAppSelector((state) => state.filteredOrganisms);

  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [distanceValue, setDistanceValue] = useState<string>('10');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);

  const handleCategoryChange = (tag: string) => {
    if (categoryFilter.includes(tag)) {
      dispatch(
        filterCategories(
          categoryFilter.filter((selectedCategory) => selectedCategory !== tag)
        )
      );
    } else {
      dispatch(filterCategories([...categoryFilter, tag]));
    }
  };

  function handleDistanceValueChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setDistanceValue(event.target.value);
  }

  function handleOpenSettings() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    // Récupération de toutes les catégories présentes dans les organismes recherchés
    const organismsCagtegories = organisms
      .map((organism) =>
        organism.services.flatMap((service) => service.categorie_id)
      )
      .flat();
    // Suppression des catégories en doublon
    setActiveCategories([
      ...new Set(organismsCagtegories.map((cat) => cat.tag)),
    ]);
  }, [organisms]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterCategories([categoryParams]));
  }, [dispatch, categoryParams]);
  return (
    <div className="settings">
      <button
        type="button"
        className="settings__dropdown-btn"
        onClick={handleOpenSettings}
      >
        <span>Trier et filtrer</span>
        <Icon icon={isOpen ? 'arrow_up' : 'arrow_down'} size="30px" />
      </button>

      <div
        className={classNames('settings__content', {
          'settings__content--visible': isOpen,
        })}
      >
        <div>
          <span>Affiner la recherche</span>
          <input
            type="text"
            placeholder="Exemple : Croix Rouge française (nord)"
            id="search-panel"
            value={searchInputValue}
            onChange={(event) => setSearchInputValue(event.target.value)}
          />
        </div>
        <div>
          <span>Filtrer par accessibilité</span>
          <div>
            <input type="checkbox" name="pmr" id="pmr" />
            <label htmlFor="pmr">Accessible PSH / PMR</label>
            <input type="checkbox" name="animals" id="animals" />
            <label htmlFor="animals">Animaux acceptés</label>
          </div>
        </div>
        <div>
          <span> Filtrer par distance</span>
          <div className="settings__filter-range">
            <input
              type="range"
              name="distance"
              id="distance"
              min="0"
              max="100"
              value={distanceValue}
              step="10"
              onChange={(event) => handleDistanceValueChange(event)}
            />
            <span className="settings__filter-range--distance">
              Jusqu&apos;à {distanceValue}km
            </span>
          </div>
        </div>
        <div>
          <span>Filtrer par catégories</span>
          <div className="settings__filter-categories">
            {categories.map((category) => {
              return (
                <div key={category.tag}>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked={categoryParams === category.tag}
                      name={category.translations[0].slug}
                      onChange={() => handleCategoryChange(category.tag)}
                      disabled={!activeCategories.includes(category.tag)}
                    />
                    {category.translations[0].name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
