import { useAppSelector } from '../../../hooks/redux';
import Card from '../Card/Card';
import Settings from '../Settings/Settings';
import './Panel.scss';

function Panel() {
  const organisms = useAppSelector((state) => state.organisms);
  const isLoading = useAppSelector((state) => state.isLoading);

  return (
    <section className="panel">
      <Settings />
      {isLoading && <div>Loading...</div>}
      {!isLoading &&
        (organisms.length > 0 ? (
          organisms.map((organism, index) => (
            <Card key={organism.id} organism={organism} map_id={index + 1} />
          ))
        ) : (
          <span>Aucun résultat pour cette catégorie.</span>
        ))}
    </section>
  );
}

export default Panel;
