import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setFilteredOrganisms } from '../../../store/reducers/organisms';
import Card from '../Card/Card';
import Settings from '../Settings/Settings';
import './Panel.scss';

function Panel() {
  const dispatch = useAppDispatch();
  const organisms = useAppSelector((state) => state.organisms);
  const filteredOrganisms = useAppSelector((state) => state.filteredOrganisms);
  const isLoading = useAppSelector((state) => state.isLoading);
  const categoryFilter = useAppSelector((state) => state.categoryFilter);
  const [isPmr, setIsPmr] = useState<boolean>(false);
  const [isAnimals, setIsAnimals] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const setFilter = organisms.filter((organism) => {
      const matchesCategoryFilter =
        [
          ...new Set(
            organism.services.map((service) => service.categorie_id.tag)
          ),
        ].filter((tag) => categoryFilter.includes(tag)).length >=
        categoryFilter.length;

      const matchesPmrFilter = isPmr ? organism.pmr : true;
      const matchesAnimalsFilter = isAnimals ? organism.animals : true;
      const matchesNameFilter = organism.name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesNameFilterWithAccents = organism.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return (
        matchesCategoryFilter &&
        matchesPmrFilter &&
        matchesAnimalsFilter &&
        (matchesNameFilter || matchesNameFilterWithAccents)
      );
    });

    dispatch(setFilteredOrganisms(setFilter));
  }, [organisms, categoryFilter, isPmr, isAnimals, search, dispatch]);

  return (
    <section className="panel">
      <Settings
        setIsPmr={setIsPmr}
        setIsAnimals={setIsAnimals}
        setSearch={setSearch}
      />
      {isLoading && <div>Loading...</div>}
      {!isLoading &&
        (filteredOrganisms.length > 0 ? (
          filteredOrganisms.map((organism, index) => (
            <Card
              key={organism.id}
              organism={organism}
              map_id={index + 1}
              categoryFilter={categoryFilter}
            />
          ))
        ) : (
          <span>Aucun résultat pour cette catégorie.</span>
        ))}
    </section>
  );
}

export default Panel;
