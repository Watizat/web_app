import { useEffect } from 'react';
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

  useEffect(() => {
    const setFilter = organisms.filter((organism) => {
      return (
        [...new Set(organism.services.map((e) => e.categorie_id.tag))].filter(
          (tag) => categoryFilter.includes(tag)
        ).length >= categoryFilter.length
      );
    });
    dispatch(setFilteredOrganisms(setFilter));
  }, [organisms, categoryFilter, dispatch]);

  return (
    <section className="panel">
      <Settings />
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
