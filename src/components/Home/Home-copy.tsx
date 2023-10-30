import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';
import { useAppSelector } from '../../hooks/redux';

import Icon from '../../ui/icon/icon';
import Container from '../Container/Container';

export default function Home() {
  const navigate = useNavigate();
  const categories = useAppSelector((state) => state.organism.categories);
  const cities = useAppSelector((state) => state.admin.zones);

  const [selectedValues, setSelectedValues] = useState({
    city: '',
    category: '',
  });

  const [cityEmpty, setCityEmpty] = useState(false);
  const [categoryEmpty, setCategoryEmpty] = useState(false);
  const [allEmpty, setAllEmpty] = useState(false);

  function initErros() {
    setCityEmpty(false);
    setCategoryEmpty(false);
    setAllEmpty(false);
  }

  const handleChangeCity = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValues((prevState) => ({
      ...prevState,
      city: event.target.value,
    }));
    initErros();
  };

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValues((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
    initErros();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('city', selectedValues.city); // localStorage est récupéré par Leaflet pour afficher la map dans "Resultats"
    if (selectedValues.city && selectedValues.category) {
      const encodedCategory = encodeURIComponent(selectedValues.category);
      navigate(
        `resultats/?city=${selectedValues.city.toLowerCase()}&category=${encodedCategory}`
      );
    } else if (!selectedValues.city && !selectedValues.category) {
      setAllEmpty(true);
    } else if (!selectedValues.category) {
      setCategoryEmpty(true);
    } else if (!selectedValues.city) {
      setCityEmpty(true);
    }
  };

  // TODO Implémenter la possibilité de ne pas choisir de catégorie
  return (
    <main className="w-full h-full m-auto ">
      <ProgressiveImage
        src="https://format.creatorcdn.com/51e1010b-87f0-4701-a6cf-cf5b141e5f0f/0/0/0/0,374,3646,1782,1140,440/0-0-0/0b695aa0-5cde-4495-8e7e-3b3f03de75b0/1/2/DSC_6744.jpg?fjkss=exp=2014043173~hmac=5c5e1710e09b0362acec487117c27a9281782b0ce3d694e90a5062274e6e66f8"
        placeholder="https://unsplash.com/photos/2pCaSQfOIkU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDN8fGJvcmRlcnxlbnwwfDB8fHwxNjk4NjYyNTI4fDA&force=true&w=320"
      >
        {(src, loading) => (
          <img
            className={`image${
              loading ? ' loading' : ' loaded'
            } absolute inset-0 m-auto object-cover object-top w-10/12 h-5/6 -z-10 rounded-xl blur-10 opacity-80 `}
            src={src}
            alt="Robot"
          />
        )}
      </ProgressiveImage>
      <Container>
        <div className="flex flex-col items-center content-start justify-center flex-1 w-2/5 py-8 m-auto shadow-md bg-white/90 sm:rounded-lg sm:px-4 gap-y-2">
          <h3 className="mb-2 text-2xl font-semibold leading-6 text-gray-900">
            Rechercher un organisme
          </h3>
          <div className="max-w-xl text-sm text-gray-500">
            <p>Sélectionnez une ville ainsi qu&apos;un organisme</p>
          </div>
          <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            <div className="grid p-4 divide-x-0 divide-gray-200 lg:divide-x lg:grid-cols-2">
              <div className="flex flex-col justify-center w-full px-4 m-auto">
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold leading-6 text-slate-700"
                >
                  1 . Zone géographique
                </label>
                <select
                  id="city"
                  value={selectedValues.city}
                  onChange={handleChangeCity}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-watizat-500 sm:text-sm sm:leading-6"
                >
                  <option value="" disabled>
                    Selectionner une ville...
                  </option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col justify-center w-full px-4 m-auto ">
                <label
                  htmlFor="category"
                  className="block text-sm font-semibold leading-6 text-slate-700"
                >
                  2 . Catégorie
                </label>
                <select
                  id="category"
                  value={selectedValues.category}
                  onChange={handleChangeCategory}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-watizat-500 sm:text-sm sm:leading-6"
                >
                  <option value="" disabled>
                    Selectionner une catégorie...
                  </option>
                  {categories.map((categorie) => (
                    <option
                      className="flex"
                      key={categorie.translations[0].slug}
                      value={categorie.translations[0].slug}
                    >
                      <Icon
                        icon={categorie.tag}
                        className="flex-shrink-0 block h-5 m-4 bg-black rounded-full stroke-1 y-8 aspect-square stroke-black fill-black"
                      />
                      <p>{categorie.translations[0].name}</p>
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-watizat-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-watizat-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-watizat-500"
              >
                Lancer la recherche
              </button>{' '}
              {cityEmpty || categoryEmpty || allEmpty ? (
                <p className="text-sm font-medium text-center text-red-600">
                  {cityEmpty
                    ? 'Merci de bien vouloir sélectionner une ville'
                    : ''}
                  {categoryEmpty
                    ? 'Merci de bien vouloir sélectionner une catégorie'
                    : ''}
                  {allEmpty
                    ? 'Merci de bien vouloir sélectionner une ville et une catégorie'
                    : ''}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
}
