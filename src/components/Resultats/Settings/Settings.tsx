import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  fetchCategories,
  filterCategories,
} from '../../../store/reducers/organisms';
import Icon from '../../../ui/icon/icon';
import './Settings.scss';

interface SettingsProps {
  isPmr: boolean;
  setIsPmr: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAnimalsAccepted: React.Dispatch<React.SetStateAction<boolean>>;
  isAnimalsAccepted: boolean;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function Settings({
  isPmr,
  setIsPmr,
  isAnimalsAccepted,
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

  const isTouch = useMediaQuery({ query: '(max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  // const [checkboxChecked, setCheckboxChecked] = useState(false);

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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
        <form onSubmit={handleSubmit} className="settingsTopBar-form">
          <input
            type="text"
            placeholder="Recherchez un organisme..."
            id="search-panel"
            value={searchInputValue}
            onChange={handleSearch}
            className="settingsTopBar-form__input"
          />
        </form>
        <button
          type="button"
          className="settingsTopBar-dropdownBtn"
          onClick={handleOpenSettings}
        >
          {!isOpen ? (
            <span className="settingsTopBar-dropdownBtn__filter">Filtrer</span>
          ) : (
            <span className="settingsTopBar-dropdownBtn__valid">Valider</span>
          )}
        </button>
      </div>

      <div
        className={classNames('settingsContent', {
          'settingsContent-visible': isOpen,
        })}
      >
        <div className="settingsContent-filter">
          <div className="settingsContent-filter__title">
            Filtrer par accessibilité
          </div>
          <div className="settingsContent-filter__list settingsContent-filter__listAccess">
            <div
              className={`settingsContent-filter__list___div ${
                isPmr ? 'settingsContent-filter__list___div-active' : ''
              }`}
            >
              <label className="settingsContent-filter__list___div-label">
                <input
                  type="checkbox"
                  name="pmr"
                  onChange={(event) => handlePmr(event)}
                />
                <i className="las la-wheelchair" />
                <span className="settingsContent-filter__list___div-text">
                  Accessible PSH / PMR
                </span>
              </label>
            </div>

            <div
              className={`settingsContent-filter__list___div ${
                isAnimalsAccepted
                  ? 'settingsContent-filter__list___div-active'
                  : ''
              }`}
            >
              <label className="settingsContent-filter__list___div-label">
                <input
                  type="checkbox"
                  name="animals"
                  onChange={(event) => handleAnimals(event)}
                />
                <i className="las la-dog" />
                <span className="settingsContent-filter__list___div-text">
                  Animaux acceptés
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="settingsContent-filter">
          <div className="settingsContent-filter__title">
            Affiner par catégories
          </div>
          <div className="settingsContent-filter__list settingsContent-filter__listCategory">
            {categories.map((category) => {
              return (
                <div
                  key={category.tag}
                  className={`settingsContent-filter__list___div settingsContent-filter__listCategory__div 
                    ${
                      !activeCategories.includes(category.tag)
                        ? 'settingsContent-filter__list___div-disabled'
                        : ''
                    } 
                  ${
                    categoryFilter.includes(category.tag)
                      ? 'settingsContent-filter__list___div-active'
                      : ''
                  }`}
                >
                  <label className="settingsContent-filter__list___div-label">
                    {isTouch && (
                      <Icon
                        icon={category.tag}
                        className="settingsContent-filter__list___div-icon"
                      />
                    )}

                    <input
                      type="checkbox"
                      defaultChecked={categoryParams === category.tag}
                      name={category.translations[0].slug}
                      onChange={() => handleCategoryChange(category.tag)}
                      disabled={!activeCategories.includes(category.tag)}
                      className="settingsContent-catFilter__listCategoryt___div-input"
                    />

                    {isDesktop && (
                      <Icon
                        icon={category.tag}
                        className="settingsContent-filter__list___div-icon"
                      />
                    )}
                    <span className="settingsContent-filter__list___div-text">
                      {category.translations[0].name}
                    </span>
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
