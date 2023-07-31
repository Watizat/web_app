import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchZones } from '../../store/reducers/admin';
import { fetchCategories, fetchDays } from '../../store/reducers/organisms';
import './App.scss';

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const langue = useAppSelector((state) => state.organism.langue);

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
    <div className="app">
      {!loading && (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
