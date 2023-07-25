import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchOrganisms } from '../../store/reducers/organisms';
import Header from './Header/Header';
import Map from './Map/Map';
import Panel from './Panel/Panel';
import Menu from './Menu/Menu';
import './Resultats.scss';

function Resultats() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrganisms(/* category as string */));
  }, [dispatch]);
  return (
    <>
      <Header />
      <main className="results">
        <Panel />
        <Map />
        <Menu />
      </main>
    </>
  );
}

export default Resultats;
