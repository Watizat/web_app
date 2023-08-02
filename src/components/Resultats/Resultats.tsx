import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { fetchOrganisms } from '../../store/reducers/organisms';
import Header from '../Header/Header';
import Map from './Map/Map';
import Menu from './Menu/Menu';
import Panel from './Panel/Panel';
import './Resultats.scss';

function Resultats() {
  const isTouch = useMediaQuery({ query: '(max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const [isActiveMap, setIsActiveMap] = useState(false);

  const [queryParamaters] = useSearchParams();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');
  const categoryParams = searchParams.getAll('category');

  useEffect(() => {
    dispatch(fetchOrganisms(city as string));
  }, [dispatch, city]);

  const handleFilterChange = (newCity: string, newCategory: string[]) => {
    const newSearchParams = new URLSearchParams();
    if (newCity) {
      newSearchParams.append('city', newCity.toLowerCase());
    }
    if (newCategory && newCategory.length > 0) {
      newCategory.forEach((cat) => newSearchParams.append('category', cat));
    }

    navigate(`/resultats?${newSearchParams.toString()}`);

    dispatch(fetchOrganisms(newCity));
  };

  return (
    <>
      <Header />
      <main className="results">
        {(isDesktop || !isActiveMap) && (
          <Panel onFilterChange={handleFilterChange} />
        )}
        {(isDesktop || isActiveMap) && <Map />}
        {isTouch && (
          <Menu isActiveMap={isActiveMap} setIsActiveMap={setIsActiveMap} />
        )}
      </main>
    </>
  );
}

export default Resultats;
