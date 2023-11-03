import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import {
  fetchCityPosition,
  fetchOrganisms,
} from '../../../store/reducers/organisms';

import Sidebar from './Sidebar';
import Header from '../Header/Results';
import Map from './Map/Map';
import MobileToggle from './MobileToggle';

export default function Resultats() {
  const isTouch = useMediaQuery({ query: '(max-width: 1023px)' });
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');

  const [cityPosition, setCityPosition] = useState<
    | {
        lat: number;
        lng: number;
      }
    | undefined
  >();

  const [isMobileMap, setIsMobileMap] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);

  useEffect(() => {
    async function fetchCity() {
      const { payload } = await dispatch(
        fetchCityPosition(localStorage.getItem('city'))
      );
      const { latitude, longitude } = payload;
      setCityPosition({ lat: latitude, lng: longitude });
      await dispatch(fetchOrganisms(city as string));
    }
    fetchCity();
  }, [dispatch, city]);

  return (
    <main>
      <Header setOpenFilters={setOpenFilters} />
      <Sidebar
        openFilters={openFilters}
        setOpenFilters={setOpenFilters}
        isMobileMap={isMobileMap}
      />
      {isTouch ? (
        <>
          <section className="absolute inline-flex w-full min-h-mapHeight h-mapHeight py-auto">
            <Map cityPosition={cityPosition} />
          </section>
          <MobileToggle
            isMobileMap={isMobileMap}
            setIsMobileMap={setIsMobileMap}
          />
        </>
      ) : (
        <section className="absolute flex w-full min-h-mapHeight h-mapHeight py-auto 2xl:pl-[45rem] xl:pl-[40rem] pl-[30rem]">
          <Map cityPosition={cityPosition} />
        </section>
      )}
    </main>
  );
}
