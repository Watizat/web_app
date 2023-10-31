import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import {
  fetchCityPosition,
  fetchOrganisms,
} from '../../store/reducers/organisms';

import Sidebar from './SideBar/Sidebar';
import Header from './Header/Header';
import Map from './Map/Map';
import MobileToggle from './MobileToggle/MobileToggle';

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
      {isTouch && isMobileMap && (
        <>
          <Sidebar
            openFilters={openFilters}
            setOpenFilters={setOpenFilters}
            isMobileMap={isMobileMap}
          />
          <section className="absolute flex w-full min-h-mapHeight h-mapHeight py-auto lg:pl-[45rem]">
            <Map cityPosition={cityPosition} />
          </section>
          <MobileToggle
            isMobileMap={isMobileMap}
            setIsMobileMap={setIsMobileMap}
          />
        </>
      )}
      {isTouch && !isMobileMap && (
        <>
          <Sidebar
            openFilters={openFilters}
            setOpenFilters={setOpenFilters}
            isMobileMap={isMobileMap}
          />
          <MobileToggle
            isMobileMap={isMobileMap}
            setIsMobileMap={setIsMobileMap}
          />
        </>
      )}

      {!isTouch && (
        <>
          <Sidebar
            openFilters={openFilters}
            setOpenFilters={setOpenFilters}
            isMobileMap={isMobileMap}
          />
          <section className="absolute flex w-full min-h-mapHeight h-mapHeight py-auto 2xl:pl-[45rem] xl:pl-[40rem] pl-[30rem]">
            <Map cityPosition={cityPosition} />
          </section>
        </>
      )}
    </main>
  );
}
