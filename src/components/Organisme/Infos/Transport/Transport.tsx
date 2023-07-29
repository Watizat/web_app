import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '../../../../hooks/redux';
import './Transport.scss';
import navitiaInstance from '../../../../utils/navitia';
import { Organism } from '../../../../@types/organism';

interface TransportData {
  id: string;
  name: string;
  distance: string;
  lines: BusLine[];
}

interface PlaceNearby {
  places_nearby: PlaceNearbyData[];
}
interface PlaceNearbyData {
  id: string;
  name: string;
  distance: string;
  lines: BusLine[];
}

interface BusLine {
  id: string;
  code: string;
  color: string;
  text_color: string;
  commercial_mode: string; // Modification de l'interface CommercialMode
}

function Transport() {
  const [data, setData] = useState<TransportData[]>([]);
  const organism = useAppSelector(
    (state) => state.organism.organism as Organism
  );

  useEffect(() => {
    const fetchPlaceNearby = async () => {
      const placeNearbyEndpoint = `/coverage/fr-sw/coord/${organism.longitude}%3B${organism.latitude}/places_nearby?distance=500&type[]=stop_area&`;
      try {
        const responseNearby = await navitiaInstance.get(placeNearbyEndpoint);
        const placesNearby = responseNearby.data as PlaceNearby;
        const placeNearbyTransport = placesNearby.places_nearby.map((place) => {
          return {
            id: place.id,
            name: place.name,
            distance: place.distance,
            lines: [],
          };
        });
        return placeNearbyTransport;
      } catch (error) {
        console.error("Erreur lors de l'appel API placeNearby:", error);
        return null;
      }
    };

    const fetchBusLines = async () => {
      const placeNearbyTransport = await fetchPlaceNearby();
      // console.log('placeNearbyTransport :', placeNearbyTransport);
      if (!placeNearbyTransport) {
        return;
      }
      const busLinesPromises = placeNearbyTransport.map(async (stop) => {
        const { id, ...rest } = stop;
        const busLinesEndpoint = `coverage/fr-sw/stop_areas/${stop.id}/lines`;
        try {
          const busLinesResponse = await navitiaInstance.get(busLinesEndpoint);
          const busLinesData = busLinesResponse.data;
          // console.log('busLinesData :', busLinesData);
          const busLine = busLinesData.lines.map((line) => {
            return {
              id: line.id,
              code: line.code,
              color: line.color,
              text_color: line.text_color,
              commercial_mode: line.commercial_mode.name,
            };
          });
          const updatedStop = {
            id,
            ...rest,
            lines: busLine,
          };

          return updatedStop;
        } catch (error) {
          console.error("Erreur lors de l'appel API des BusLines", error);
        }
      });

      const updatedPlaceNearbyTransport = await Promise.all(busLinesPromises);

      console.log('All data :', updatedPlaceNearbyTransport);
      return updatedPlaceNearbyTransport;
    };
    const fetchData = async () => {
      const placeNearbyTransport = await fetchPlaceNearby();

      if (!placeNearbyTransport) {
        setData([]);
        return;
      }

      const dataWithBusLines = await fetchBusLines(placeNearbyTransport);
      setData(dataWithBusLines);

      console.log('All data :', dataWithBusLines);
    };

    fetchData();
  }, [organism]);

  // si l'organism n'existe pas
  if (data.length === 0) {
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
      {data.map((item) => (
        <div className="transport" key={item.id}>
          <p>
            {item.name} à {item.distance} m
          </p>
          <div className="transport-lines">
            {item.lines.map((line) => (
              <React.Fragment key={line.id}>
                <span
                  className="transport-num"
                  style={{
                    backgroundColor: `#${line.color}`,
                    color: `#${line.text_color}`,
                  }}
                >
                  <i
                    className={
                      line.commercial_mode === 'Bus'
                        ? classNames('las la-bus-alt')
                        : classNames('las la-subway')
                    }
                  />
                  {line.code}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </article>
  );
}

export default Transport;
