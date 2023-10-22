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
import styles from './Settings.module.scss';

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
    <div className={styles.settings}>
      <div className={styles.topBar}>
        <form onSubmit={handleSubmit} className={styles.topBar_form}>
          <input
            type="text"
            placeholder="Recherchez un organisme..."
            id="search-panel"
            value={searchInputValue}
            onChange={handleSearch}
            className={styles.topBar_form__input}
          />
        </form>
        <button
          type="button"
          className={styles.topBar_dropdownBtn}
          onClick={handleOpenSettings}
        >
          {!isOpen ? (
            <span className={styles.topBar_dropdownBtn__filter}>Filtrer</span>
          ) : (
            <span className={styles.topBar_dropdownBtn__valid}>Valider</span>
          )}
        </button>
      </div>

      <div
        className={classNames(styles.content, {
          [styles.content_visible]: isOpen,
        })}
      >
        <div className={styles.content_filter}>
          <div className={styles.content_filter__title}>
            Filtrer par accessibilité
          </div>
          <div
            className={`${styles.content_filter__list} ${styles.content_filter__listAccess}`}
          >
            <div
              className={`${styles.content_filter__list___div} ${
                isPmr ? styles.content_filter__list___div____active : ''
              }`}
            >
              <label className={styles.content_filter__list___div____label}>
                <input
                  type="checkbox"
                  name="pmr"
                  onChange={(event) => handlePmr(event)}
                />
                <i className="las la-wheelchair" />
                <span className={styles.content_filter__list___div____text}>
                  Accessible PSH / PMR
                </span>
              </label>
            </div>

            <div
              className={`${styles.content_filter__list___div} ${
                isAnimalsAccepted
                  ? styles.content_filter__list___div____active
                  : ''
              }`}
            >
              <label className={styles.content_filter__list___div____label}>
                <input
                  type="checkbox"
                  name="animals"
                  onChange={(event) => handleAnimals(event)}
                />
                <i className="las la-dog" />
                <span className={styles.content_filter__list___div____text}>
                  Animaux acceptés
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className={styles.content_filter}>
          <div className={styles.content_filter__title}>
            Affiner par catégories
          </div>
          <div
            className={`${styles.content_filter__list} ${styles.content_filter__listCategory}`}
          >
            {categories.map((category) => {
              return (
                <div
                  key={category.tag}
                  className={`${styles.content_filter__list___div} ${
                    styles.content_filter__list___div
                  } ${
                    !activeCategories.includes(category.tag)
                      ? styles.content_filter__list___div____disabled
                      : ''
                  } ${
                    categoryFilter.includes(category.tag)
                      ? styles.content_filter__list___div____active
                      : ''
                  }`}
                >
                  <label className={styles.content_filter__list___div____label}>
                    {isTouch && (
                      <Icon
                        icon={category.tag}
                        className={styles.content_filter__list___div____icon}
                      />
                    )}

                    <input
                      type="checkbox"
                      defaultChecked={categoryParams === category.tag}
                      name={category.translations[0].slug}
                      onChange={() => handleCategoryChange(category.tag)}
                      disabled={!activeCategories.includes(category.tag)}
                      className={styles.content_filter__list___div____input}
                    />

                    {isDesktop && (
                      <Icon
                        icon={category.tag}
                        className={styles.content_filter__list___div____icon}
                      />
                    )}
                    <span className={styles.content_filter__list___div____text}>
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
