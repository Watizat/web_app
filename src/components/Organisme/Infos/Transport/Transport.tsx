import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import './Transport.scss';
import navitiaInstance from '../../../../utils/navitia';

function Transport() {
  const [data, setData] = useState(null);
  const organism = useAppSelector((state) => state.organism.organism);

  console.log(organism);

  useEffect(() => {
    const endpoint =
      `/coverage/fr-sw/coord/`${organism.latitude}`%`${organism.longitude}`/lines/stop_areas?`;

    navitiaInstance
      .get(endpoint)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de l'appel API:", error);
      });
  }, []);

  return (
    <article>
      <h3>Accès en transports</h3>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </article>
  );
}

export default Transport;
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
