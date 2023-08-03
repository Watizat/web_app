import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import {
  fetchCityPosition,
  fetchOrganisms,
} from '../../store/reducers/organisms';
import Header from '../Header/Header';
import Map from './Map/Map';
import Menu from './Menu/Menu';
import Panel from './Panel/Panel';
import './Resultats.scss';

function Resultats() {
  const isTouch = useMediaQuery({ query: '(max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const [loader, setLoader] = useState<boolean>(true);
  const [isActiveMap, setIsActiveMap] = useState(false);
  const [cityPosition, setCityPosition] = useState<
    | {
        lat: number;
        lng: number;
      }
    | undefined
  >();

  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');

  useEffect(() => {
    async function fetchCity() {
      const { payload } = await dispatch(
        fetchCityPosition(localStorage.getItem('city'))
      );
      const { latitude, longitude } = payload;
      setCityPosition({ lat: latitude, lng: longitude });
      await dispatch(fetchOrganisms(city as string));
      setLoader(false);
    }
    fetchCity();
  }, [dispatch, city]);

  return (
    <>
      <Header />
      <main className="results">
        {(isDesktop || !isActiveMap) && !loader && <Panel />}
        {(isDesktop || isActiveMap) && !loader && (
          <Map cityPosition={cityPosition} />
        )}
        {isTouch && (
          <Menu isActiveMap={isActiveMap} setIsActiveMap={setIsActiveMap} />
        )}
      </main>
    </>
  );
}

export default Resultats;
