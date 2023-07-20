import { useEffect, useState } from 'react';
import { Organism } from '../../../@types/organism';
import { useAppSelector } from '../../../hooks/redux';
import Card from '../Card/Card';
import Settings from '../Settings/Settings';
import './Panel.scss';

function Panel() {
  const organisms = useAppSelector((state) => state.organisms);
  const isLoading = useAppSelector((state) => state.isLoading);
  const selected = useAppSelector((state) => state.categoryFilter);
  const [organismsFiltered, setOrganismsFiltered] = useState<Organism[] | []>(
    []
  );

  useEffect(() => {
    const setFilter = organisms.filter((organism) => {
      return (
        [...new Set(organism.services.map((e) => e.categorie_id.tag))].filter(
          (tag) => selected.includes(tag)
        ).length >= selected.length
      );
    });
    setOrganismsFiltered(setFilter);
  }, [organisms, selected]);

  return (
    <section className="panel">
      <Settings organismsFiltered={organismsFiltered} />
      {isLoading && <div>Loading...</div>}
      {!isLoading &&
        (organismsFiltered.length > 0 ? (
          organismsFiltered.map((organism, index) => (
            <Card
              key={organism.id}
              organism={organism}
              map_id={index + 1}
              selected={selected}
            />
          ))
        ) : (
          <span>Aucun résultat pour cette catégorie.</span>
        ))}
    </section>
  );
}

export default Panel;
