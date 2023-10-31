import { useSearchParams } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  fetchCategories,
  filterCategories,
} from '../../../store/reducers/organisms';
import Category from './Category';
import Search from './Search';
import Accessibility from './Accessibility';

interface FiltersProps {
  setIsPmr: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAnimalsAccepted: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  openFilters: boolean;
  setOpenFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SlideFilters({
  openFilters,
  setOpenFilters,
  setIsPmr,
  setIsAnimalsAccepted,
  setSearch,
}: FiltersProps) {
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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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

  return (
    <Transition.Root show={openFilters} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenFilters}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-2xl pointer-events-auto">
                  <form className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1">
                      {/* Header */}
                      <div className="px-4 py-8 bg-watizat-500/90 sm:px-6">
                        <div className="flex items-start justify-between space-x-3">
                          <div className="space-y-1">
                            <Dialog.Title className="text-lg font-normal leading-6 text-white">
                              Filtrer les résultats
                            </Dialog.Title>
                            {/* <p className="text-sm font-medium text-slate-50">
                              Ajuster l'affichage des résultats, en fonction de vos besoins
                            </p> */}
                          </div>
                          <div className="flex items-center h-7">
                            <button
                              type="button"
                              className="relative text-white focus:outline-none "
                              onClick={() => setOpenFilters(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

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
                          // eslint-disable-next-line react/jsx-no-bind
                          handleAnimals={handleAnimals}
                        />

                        {/* Categories */}
                        <Category
                          categories={categories}
                          activeCategories={activeCategories}
                          categoryFilter={categoryFilter}
                          categoryParams={categoryParams}
                          handleCategoryChange={handleCategoryChange}
                        />
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex-shrink-0 px-4 py-5 border-t border-gray-200 sm:px-6">
                      <div className="flex justify-start space-x-3">
                        <button
                          type="button"
                          onClick={() => setOpenFilters(false)}
                          className="inline-flex justify-center px-6 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-watizat-500 hover:bg-watizat-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-watizat-500"
                        >
                          Fermer
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
