import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { fetchOrganisms } from '../../store/reducers/organisms';
import Header from './Header/Header';
import Map from './Map/Map';
import Menu from './Menu/Menu';
import Panel from './Panel/Panel';
import './Resultats.scss';

function Resultats() {
  const isTouch = useMediaQuery({ query: '(max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const [isActiveMap, setIsActiveMap] = useState(false);

  const [queryParamaters] = useSearchParams();
  const city = queryParamaters.get('city');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrganisms(city as string));
  }, [dispatch, city]);

  return (
    <>
      <Header />
      <main className="results">
        {(isDesktop || !isActiveMap) && <Panel />}
        {(isDesktop || isActiveMap) && <Map />}
        {isTouch && (
          <Menu isActiveMap={isActiveMap} setIsActiveMap={setIsActiveMap} />
        )}
      </main>
    </>
  );
}

export default Resultats;
