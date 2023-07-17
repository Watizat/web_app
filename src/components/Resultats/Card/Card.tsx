import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

import Icon from '../../../ui/icon/icon';
import './Card.scss';

const categories = [
  { id: 1, value: 'acceuil_de_jour', isCheck: false },
  { id: 2, value: 'accueil_et_orientation', isCheck: false },
  { id: 3, value: 'bagagerie', isCheck: false },
  { id: 4, value: 'manger', isCheck: true },
  { id: 5, value: 'permanences_sociales', isCheck: false },
  { id: 6, value: 'retablissement_des_liens_familiaux', isCheck: false },
];

function Card() {
  return (
    <div className="card_container">
      <div className="card_container_left">
        <div className="card_container_left-upper">
          <div className="card_container_left-upper_top">
            <div className="card_container_left-upper_position-id">
              <p>1</p>
            </div>
            <div className="card_container_left-upper_organization-infos">
              <div className="card_container_left-upper_title">
                Pôle d&apos;accueil, d&apos;information et d&apos;orientation
                (PAIO)
              </div>
              <span className="card_container_left-upper_address">
                66 bis avenue Etienne-Billières, 31000 Toulouse
              </span>
            </div>
          </div>
          <div className="card_container_left-upper_description">
            Écoute, renseignement et orientation pour les personnes sans
            domicile fixe n’ayant pas de référent social. Service social public
            qui apporte une aide ponctuelle sur les besoins de première
            nécessité et l&apos;accès aux droits. Pour assurer un suivi, une
            orientation vers un référent social aura lieu. Permanence
            téléphonique du lundi au vendredi 13h-17h. Pour prendre rendez-vous,
            venir sur place le matin (9h-12h), pas de rdv donné par téléphone
          </div>
        </div>
        <div className="card_container_left-lower">
          {/* link to à modifier */}
          <Link
            className="card_container_left-lower_more-infos-link"
            to="/organisme/slug"
          >
            <Icon icon="plus" size="14px" /> En savoir plus
          </Link>
          <div className="card_container_left-lower_categories">
            {categories.map((e) => (
              <Icon
                key={e.id}
                className={`card_container_left-lower_categories_item${
                  e.isCheck ? '--check' : ''
                }`}
                icon={e.value}
                size="30px"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="card_container_right">
        <Link
          to="geo:38.62464092991612,-90.18476128578186"
          // to={`https://www.google.com/maps/search/?api=1&query=${47.5951518}%2C${-122.3316393}`}
          className="card_container_right_go"
        >
          <Icon icon="directions_walk" size="1.2rem" /> <p>J&apos;y vais !</p>
        </Link>
        <Link to="tel:+33534364095" className="card_container_right_contact">
          <Icon icon="phone" size="1.2rem" /> <p>05 34 36 40 95</p>
        </Link>
      </div>
    </div>
  );
}

export default Card;
