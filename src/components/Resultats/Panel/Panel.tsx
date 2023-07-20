import { useAppSelector } from '../../../hooks/redux';
import Card from '../Card/Card';
import Settings from '../Settings/Settings';
import './Panel.scss';

function Panel() {
  const organisms = useAppSelector((state) => state.organisms);
  const isLoading = useAppSelector((state) => state.isLoading);
  const selected = useAppSelector((state) => state.categoryFilter);

  // const filteredOrganizations = organisms.filter((organization) => {
  //   const { services } = organization;
  //   if (!services || !Array.isArray(services)) return false;

  //   const organizationServiceSlugs = services.map(
  //     (service) => service.categorie_id.tag
  //   );
  //   return serviceSlugs.every((slug) =>
  //     organizationServiceSlugs.includes(slug)
  //   );
  // });
  // console.log(filteredOrganizations);
  const checkMatchCategories = organisms.filter((organism) => {
    return organism.services.map((e) => e.categorie_id.tag);
    /* .map((e) => selected.includes(e)).length === selected.length */
  });

  /*     .map((e) => [...e.map((f) => f.categorie_id.tag)])
    .map((e) => e.filter((f) => selected.includes(f))) */

  console.log('yeah', checkMatchCategories);
  console.log(selected);

  return (
    <section className="panel">
      <Settings />
      {isLoading && <div>Loading...</div>}
      {!isLoading &&
        (organisms.length > 0 ? (
          organisms.map((organism, index) => (
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
