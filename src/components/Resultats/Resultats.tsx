import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import {
  fetchCityPosition,
  fetchOrganisms,
} from '../../store/reducers/organisms';

import Sidebar from './SideBar/Sidebar';
import Header from './Header/Header';
import Map from './Map/Map';

export default function Resultats() {
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

  const [openFilters, setOpenFilters] = useState(false);
  console.log('cityPosition', cityPosition);

  return (
    <main>
      <Sidebar openFilters={openFilters} setOpenFilters={setOpenFilters} />
      <Header setOpenFilters={setOpenFilters} />
      <section className="absolute flex w-full min-h-mapHeight h-mapHeight py-auto lg:pl-[45rem]">
        <Map cityPosition={cityPosition} />
      </section>
    </main>
  );
}
