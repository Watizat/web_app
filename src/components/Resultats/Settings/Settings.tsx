import { useMediaQuery } from 'react-responsive';
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

interface SettingsProps {
  setIsPmr: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAnimalsAccepted: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function Settings({
  setIsPmr,
  setIsAnimalsAccepted,
  setSearch,
}: SettingsProps) {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const categoryParams = searchParams.get('category') as string;

  const categories = useAppSelector((state) => state.organism.categories);
  const categoryFilter = useAppSelector(
    (state) => state.organism.categoryFilter
  );
  const organisms = useAppSelector((state) => state.organism.filteredOrganisms);

  const [searchInputValue, setSearchInputValue] = useState<string>('');
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

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.trim() === '') {
      setSearch('');
    }
    setSearch(event.target.value);
    setSearchInputValue(event.target.value);
  }

  function handlePmr(event: React.ChangeEvent<HTMLInputElement>) {
    setIsPmr(event.target.checked);
  }

  function handleAnimals(event: React.ChangeEvent<HTMLInputElement>) {
    setIsAnimalsAccepted(event.target.checked);
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
    <div id="resultsSettings">
      <div className="settingsTopBar">
        <form className="settingsTopBar-form">
          <input
            type="text"
            placeholder="Recherchez un organisme..."
            id="search-panel"
            value={searchInputValue}
            onChange={handleSearch}
            className="settingsTopBar-form__input"
          />
        </form>
        {/*         <Icon icon={isOpen ? 'arrow_up' : 'arrow_down'} size="30px" />
         */}
        <button
          type="button"
          className="settingsTopBar-dropdownBtn"
          onClick={handleOpenSettings}
        >
          Filtres
        </button>
      </div>

      <div
        className={classNames('settingsContent', {
          'settingsContent-visible': isOpen,
        })}
      >
        <div className="settingsContent-filter">
          <span className="settingsContent-filter__title">
            Filtrer par accessibilité
          </span>
          <div className="settingsContent-filter__list settingsContent-filter__listAccess">
            <label
              htmlFor="pmr"
              className="settingsContent-filter__list__label"
            >
              <input
                type="checkbox"
                name="pmr"
                id="pmr"
                onChange={(event) => handlePmr(event)}
              />
              Accessible PSH / PMR
            </label>
            <label htmlFor="animals">
              <input
                type="checkbox"
                name="animals"
                id="animals"
                onChange={(event) => handleAnimals(event)}
              />
              Animaux acceptés
            </label>
          </div>
        </div>

        <div className="settingsContent-filter">
          <span className="settingsContent-filter__title">
            Affiner par catégories
          </span>
          <div className="settingsContent-filter__list">
            {categories.map((category) => {
              return (
                <div key={category.tag}>
                  <label className="settingsContent-filter__catList__label">
                    <input
                      type="checkbox"
                      defaultChecked={categoryParams === category.tag}
                      name={category.translations[0].slug}
                      onChange={() => handleCategoryChange(category.tag)}
                      disabled={!activeCategories.includes(category.tag)}
                      className="settingsContent-catFilter__catList__input"
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
