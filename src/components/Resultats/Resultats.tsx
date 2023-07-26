import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchOrganisms } from '../../store/reducers/organisms';
import Header from './Header/Header';
import Map from './Map/Map';
import Panel from './Panel/Panel';
import Menu from './Menu/Menu';
import './Resultats.scss';

function Resultats() {
  const isTouch = useMediaQuery({ query: '(max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const dispatch = useAppDispatch();

  useEffect(() => { 
    dispatch(fetchOrganisms(/* category as string */));
  }, [dispatch]);
  return ( 
    <>  

    {isTouch &&     
    <>
      <Header />
      <main className="results">
      {isActiveResults && <Panel /> }
      {isActiveMap && <Map /> }
        <Menu />
      </main>
    </>}   

    {isDesktop &&     
    <>
      <Header />
      <main className="results">
        <Panel />
        <Map />
        Menu
      </main>
    </>} 
    
    </>
  );
}

export default Resultats;
