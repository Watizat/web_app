import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import { useAppDispatch } from '../../hooks/redux';
import { fetchCategories } from '../../store/reducers/organisms';
import './App.scss';

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchCategories());
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

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
