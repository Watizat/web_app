import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setFilteredOrganisms } from '../../../store/reducers/organisms';
import ResultatsCardSkeleton from '../../Skeleton/ResultatCard/ResultatCard';
import Card from '../Card/Card';
import Settings from '../Settings/Settings';
import './Panel.scss';

function Panel() {
  const dispatch = useAppDispatch();
  const organisms = useAppSelector((state) => state.organism.organisms);
  const filteredOrganisms = useAppSelector(
    (state) => state.organism.filteredOrganisms
  );
  const isLoading = useAppSelector((state) => state.organism.isLoading);
  const categoryFilter = useAppSelector(
    (state) => state.organism.categoryFilter
  );

  const [isPmr, setIsPmr] = useState<boolean>(false);
  const [isAnimalsAccepted, setIsAnimalsAccepted] = useState<boolean>(false);
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
      const matchesAnimalsFilter = isAnimalsAccepted ? organism.animals : true;
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
  }, [organisms, categoryFilter, isPmr, isAnimalsAccepted, search, dispatch]);

  const organismToScroll = useAppSelector((state) => state.organism.scroll);

  const resultsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (organismToScroll) {
      const element = document.getElementById(organismToScroll.toString());
      if (element && resultsContainerRef.current) {
        const containerTop =
          resultsContainerRef.current.getBoundingClientRect().top;
        const elementTop = element.getBoundingClientRect().top;
        const scrollDistance = elementTop - containerTop - 25;

        resultsContainerRef.current.scrollTo({
          top: resultsContainerRef.current.scrollTop + scrollDistance,
          behavior: 'smooth',
        });
      }
    }
  }, [organismToScroll]);

  return (
    <section id="resultsPanel">
      <Settings
        isPmr={isPmr}
        setIsPmr={setIsPmr}
        isAnimalsAccepted={isAnimalsAccepted}
        setIsAnimalsAccepted={setIsAnimalsAccepted}
        setSearch={setSearch}
      />
      <div className="resultsContentCard" ref={resultsContainerRef}>
        {isLoading &&
          Array(5)
            .fill(null)
            .map((e, i) => <ResultatsCardSkeleton key={i} />)}
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
            <span>Il n&apos;y a aucun résultat.</span>
          ))}
      </div>
    </section>
  );
}

export default Panel;
