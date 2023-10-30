import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../ui/icon/icon';
import { useAppSelector } from '../../hooks/redux';

export default function SearchBox() {
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

  return (
    <div className="relative ">
      <div
        className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="flex flex-col items-center px-6 py-4 mx-auto md:py-24 sm:py-34 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Watizat
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Guide numérique
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full gap-2 p-6 mx-auto mt-10 shadow-sm md:mt-32 sm:gap-4 md:w-4/6 md:bg-slate-100/20 rounded-xl ring-1 ring-inset ring-watizat-500/20 lg:rounded-2xl lg:p-8">
          <div className="flex flex-col items-center justify-center text-center gap-y-2">
            <h3 className="mb-2 text-2xl font-semibold leading-6 text-gray-900 ">
              Rechercher un organisme
            </h3>

            <p className="leading-tight text-gray-600 md:leading-8 text-md">
              Sélectionnez une zone géographique ainsi qu&apos;une catégorie
            </p>
          </div>
          <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            <div className="grid w-full py-4 divide-x-0 divide-gray-200 md:p-4 gap-y-4 lg:divide-x lg:grid-cols-2">
              <div className="flex flex-col justify-center w-full px-4 m-auto ">
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
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-watizat-500 sm:text-sm sm:leading-6 "
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
            </div>{' '}
            {cityEmpty || categoryEmpty || allEmpty ? (
              <p className="text-sm font-medium text-center text-red-600">
                {cityEmpty
                  ? 'Merci de bien vouloir sélectionner une zone géographique'
                  : ''}
                {categoryEmpty
                  ? 'Merci de bien vouloir sélectionner une catégorie'
                  : ''}
                {allEmpty
                  ? 'Merci de bien vouloir sélectionner une zone géographique et une catégorie'
                  : ''}
              </p>
            ) : (
              <p className="text-sm font-medium text-center text-transparent">
                d
              </p>
            )}
            <div className="flex flex-col items-center justify-center">
              <button
                type="submit"
                className="flex w-1/2 justify-center rounded-md bg-watizat-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-watizat-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-watizat-500"
              >
                Lancer la recherche
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}
