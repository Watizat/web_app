import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import './Transport.scss';
import navitiaInstance from '../../../../utils/navitia';
import { Organism } from '../../../../@types/organism';

interface Endpoint {
  lines: {
    id: string;
    code: string;
    name: string;
    color: string;
    text_color: string;
    commercial_mode: { name: string };
  }[];
}

interface Place {
  lines: {
    id: string;
    code: string;
    name: string;
    color: string;
    text_color: string;
    commercial_mode: { name: string };
  }[];
}

interface StopAreas {
  stop_areas: [id: string];
}

interface TransportData {
  busLine: string;
  stopName: string;
  placeNearbyData: PlaceNearbyData[];
}

interface PlaceNearbyData {
  distance: number;
  name: string;
}

function Transport() {
  const [data, setData] = useState<TransportData[]>([]);
  const organism = useAppSelector(
    (state) => state.organism.organism as Organism
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = `/coverage/fr-sw/coord/${organism.longitude}%3B${organism.latitude}/lines`;
        const response = await navitiaInstance.get(endpoint);
        const endPoint = response.data as Endpoint;
        const busLines = endPoint.lines;
        // console.log('objet buslines', busLines);
        const batchSize = 10;
        const dataTransport = [];
        const promises = busLines.map(async (line) => {
          const stopAreas = `coverage/fr-sw/lines/${line.id}/stop_areas`;
          try {
            const stopAreasResponse = await navitiaInstance.get(stopAreas);
            const stopAreasData = stopAreasResponse.data as StopAreas;
            // console.log('stoparea :', stopAreasData);
            const stopsPromises = stopAreasData.stop_areas.map(async (stop) => {
              // console.log('stop dans le map :', stop.id);
              const placeNearby = `coverage/fr-sw/stop_areas/${stop.id}/places_nearby`;
              // console.log('appel api placenearby :', placeNearby);
              try {
                // eslint-disable-next-line prettier/prettier
                const placeNearbyResponse = await navitiaInstance.get(placeNearby);
                const placeNearbyData = placeNearbyResponse.data;
                // console.log('data des placeNear', placeNearbyResponse);
                // console.log('placenearby dans le map :', placeNearbyResponse);
                return {
                  busLine: line.code,
                  stopName: stop.name,
                  placeNearbyData,
                };
              } catch (error) {
                console.error(
                  "Erreur lors de l'appel API des placesNearby",
                  error
                );
                return null;
              }
            });

            // console.log('stoppromises :', stopsPromises);
            const stopResponses = await Promise.all(stopsPromises);
            // console.log('les réponses :', responses);
            const filteredResponses = stopResponses.filter(
              (stop) => stop !== null
            );
            dataTransport.push(...filteredResponses);
            // console.log('les réponses filtrer :', filteredResponses)
            console.log('Données récupérées :', dataTransport);
          } catch (error) {
            console.error("Erreur lors de l'appel API des stopAreas", error);
          }
        });
        await Promise.all(promises);
        setData(dataTransport);
      } catch (error) {
        console.error("Erreur lors de l'appel API endpoint:", error);
      }
    };
    fetchData();
  }, [organism]);

  // si l'organism n'existe pas
  if (data === null) {
    return (
      <article>
        <h3>Accès en transports</h3>
        <span>Pas de données de transports</span>
      </article>
    );
  }
  return (
    <article>
      <h3>Accès en transports</h3>
      {/*  {dataTransport.map((item) => (
        <p className="transport" key={item.id}>
          <i
            className={
              item.busLine.commercial_mode.name === 'Bus'
                ? classNames('las la-bus-alt')
                : classNames('las la-subway')
            }
          />
          <span
            className="transport-num"
            style={{
              backgroundColor: `#${item.busLine.color}`,
              color: `#${item.busLine.text_color}`,
            }}
          >
            {item.busLine.code}
          </span>

          {line.name}
        </p>
      ))} */}
      {/* <p><span style={{backgound-color:{area.color}}}>{area.code}</span>{area.name}</p> */}
    </article>
  );
}

export default Transport;
