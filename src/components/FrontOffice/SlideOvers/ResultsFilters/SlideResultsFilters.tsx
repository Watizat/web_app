import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import {
  fetchCategories,
  filterCategories,
} from '../../../../store/reducers/organisms';
import Slide from '../../../BackOffice/SlideOvers/Components/Slide';
import Header from '../../../BackOffice/SlideOvers/Components/Header';
import Category from './Category';
import Search from './Search';
import Accessibility from './Accessibility';
import Others from './Others';
import BtnClose from '../../../BackOffice/SlideOvers/Components/BtnClose';

interface Props {
  setIsPmr: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAnimalsAccepted: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  isOpenSlide: boolean;
  setIsOpenSlide: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SlideResultsFilters({
  isOpenSlide,
  setIsOpenSlide,
  setIsPmr,
  setIsAnimalsAccepted,
  setSearch,
}: Props) {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const categoryParams = searchParams.get('category') as string;

  const categories = useAppSelector((state) => state.organism.categories);
  const categoryFilter = useAppSelector(
    (state) => state.organism.categoryFilter
  );
  const organisms = useAppSelector((state) => state.organism.filteredOrganisms);

  const [searchInputValue, setSearchInputValue] = useState<string>('');
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

  const handleCloseSlide = () => {
    setIsOpenSlide(false);
  };

  return (
    <Slide
      isOpenSlide={isOpenSlide}
      setIsOpenSlide={setIsOpenSlide}
      slideWidth="max-w-2xl"
    >
      <form className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
        <div className="flex-1">
          <Header
            title="Filtrer les résultats"
            setIsOpenSlide={setIsOpenSlide}
          />
          {/* Divider container */}
          <div className="py-6 space-y-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
            {/* Recherche */}
            <Search
              searchInputValue={searchInputValue}
              // eslint-disable-next-line react/jsx-no-bind
              handleSearch={handleSearch}
            />

            {/* Accessibilité */}
            <Accessibility
              // eslint-disable-next-line react/jsx-no-bind
              handlePmr={handlePmr}
            />

            {/* Categories */}
            <Category
              categories={categories}
              activeCategories={activeCategories}
              categoryFilter={categoryFilter}
              categoryParams={categoryParams}
              handleCategoryChange={handleCategoryChange}
            />

            {/* Autres filtres */}
            <Others
              // eslint-disable-next-line react/jsx-no-bind
              handleAnimals={handleAnimals}
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex-shrink-0 px-4 py-5 border-t border-gray-200 sm:px-6">
          <BtnClose handleCloseSlide={handleCloseSlide} />
        </div>
      </form>
    </Slide>
  );
}
