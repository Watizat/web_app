import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { fetchOrganisms } from '../../store/reducers/organisms';
import Header from './Header/Header';
import Map from './Map/Map';
import Panel from './Panel/Panel';
import './Resultats.scss';

function Resultats() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    dispatch(fetchOrganisms(/* category as string */));
  }, [dispatch, category]);
  return (
    <>
      <Header />
      <main className="results">
        <Panel />
        <Map />
      </main>
    </>
  );
}

export default Resultats;
