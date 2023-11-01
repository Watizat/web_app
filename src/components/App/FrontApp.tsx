import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Footer from '../FrontOffice/Footer/Footer';
import Header from '../FrontOffice/Header/Header';
import HeaderSlim from '../FrontOffice/Header/HeaderSlim';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchZones } from '../../store/reducers/admin';
import { fetchCategories, fetchDays } from '../../store/reducers/organisms';

export default function FrontApp() {
  const isTablet = useMediaQuery({ query: '(min-width: 769px)' });
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const langue = useAppSelector((state) => state.organism.langue);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchCategories());
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchZones());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDays(1));
  }, [dispatch, langue]);

  return (
    <main className="relative flex flex-col overflow-y-hidden md:min-h-full md:overflow-auto">
      {!loading && (
        <>
          {pathname.startsWith('/organisme') ? <HeaderSlim /> : <Header />}
          <Outlet />
          {isTablet && <Footer />}
        </>
      )}
    </main>
  );
}
