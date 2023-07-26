import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
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

  const [isActiveMap, setIsActiveMap] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => { 
    dispatch(fetchOrganisms(/* category as string */));
  }, [dispatch]);
  return ( 
    <>
      <Header />
      <main className="results">
        {(isDesktop || !isActiveMap) && <Panel />}
        {(isDesktop || isActiveMap) && <Map />}
        {isTouch && <Menu isActiveMap={isActiveMap} setIsActiveMap={setIsActiveMap}/>}
      </main>
    </>
    
  );
}

export default Resultats;
