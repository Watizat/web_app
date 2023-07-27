import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import './Transport.scss';
import navitiaInstance from '../../../../utils/navitia';
import { Organism } from '../../../../@types/organism';

interface API {
  lines: {
    id: string;
    code: string;
    name: string;
    color: string;
    text_color: string;
  }[];
}

function Transport() {
  const [data, setData] = useState<API | null>(null);
  const organism = useAppSelector(
    (state) => state.organism.organism as Organism
  );

  useEffect(() => {
    const endpoint = `/coverage/fr-sw/coord/${organism.longitude}%3B${organism.latitude}/lines`;

    navitiaInstance
      .get(endpoint)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de l'appel API:", error);
      });
  }, [setData, organism]);

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
      {data.lines.map((line) => (
        <p key={line.id}>
          <i className="las la-bus-alt" />
          <span
            style={{
              backgroundColor: `#${line.color}`,
              color: `#${line.text_color}`,
            }}
          >
            {line.code}
          </span>

          {line.name}
        </p>
      ))}
      {/* <p><span style={{backgound-color:{area.color}}}>{area.code}</span>{area.name}</p> */}
    </article>
  );
}

export default Transport;
