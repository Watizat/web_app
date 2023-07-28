import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import './Transport.scss';
import navitiaInstance from '../../../../utils/navitia';
import { Organism } from '../../../../@types/organism';
import classNames from 'classnames';

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

function Transport() {
  const [data, setData] = useState([]);
  const organism = useAppSelector(
    (state) => state.organism.organism as Organism
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = `/coverage/fr-sw/coord/${organism.longitude}%3B${organism.latitude}/lines`;
        const response = await navitiaInstance.get(endpoint);
        const endPoint = response.data as Endpoint;
        const promises = endPoint.lines.map(async (line) => {
          const stopAreas = `coverage/fr-sw/lines/${line.id}/stop_areas`;
          try {
            const stopAreasResponse = await navitiaInstance.get(stopAreas);
            const stopAreasData = stopAreasResponse.data as StopAreas;
            console.log('stoparea :', stopAreasData);
            const stopsPromises = stopAreasData.stop_areas.map(async (stop) => {
              // console.log('stop dans le map :', stop);
              const placeNearby = `coverage/fr-sw/stop_areas/${stop.id}/places_nearby`;
              // console.log('appel api placenearby :', placeNearby);
              try {
                const placeNearbyResponse = await navitiaInstance.get(
                  placeNearby
                );
                // console.log('placenearby dans le map :', placeNearbyResponse);
                return placeNearbyResponse.data;
              } catch (error) {
                console.error(
                  "Erreur lors de l'appel API des placesNearby",
                  error
                );
                return null;
              }
            });

            console.log('stoppromises :', stopsPromises);
            const responses = await Promise.all(stopsPromises);
            console.log('les réponses :', responses);
            const filteredResponses = responses.filter((data) => data !== null);
            console.log('les réponses filtrer :', filteredResponses);
            const formattedData = [];
            filteredResponses.forEach((response, index) => {
              const busLine = endPoint.lines[index].name;
              const stopName = stopAreasData[index].name;
              const { distance } = response;
              formattedData.push({ busLine, stopName, distance });
            });
            setData(formattedData);
            console.log(formattedData);
          } catch (error) {
            console.error("Erreur lors de l'appel API des stopAreas", error);
          }
        });
        await Promise.all(promises);
      } catch (error) {
        console.error("Erreur lors de l'appel API:", error);
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
  console.log(data);
  return (
    <article>
      <h3>Accès en transports</h3>
      {data.map((item) => (
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
      ))}
      {/* <p><span style={{backgound-color:{area.color}}}>{area.code}</span>{area.name}</p> */}
    </article>
  );
}

export default Transport;
