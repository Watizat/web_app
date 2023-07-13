import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import './Card.scss';

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
          <Link className="card_container_left-lower_more-infos-link" to="/">
            + En savoir plus
          </Link>
          <div className="card_container_left-lower_categories">
            <img
              className="card_container_left-lower_categories_item"
              src={logo}
              alt="watizat logo"
            />
            <img
              className="card_container_left-lower_categories_item"
              src={logo}
              alt="watizat logo"
            />
            <img
              className="card_container_left-lower_categories_item"
              src={logo}
              alt="watizat logo"
            />
            <img
              className="card_container_left-lower_categories_item"
              src={logo}
              alt="watizat logo"
            />
          </div>
        </div>
      </div>
      <div className="card_container_right">
        <button type="button" className="card_container_right_go">
          Logo J&apos;y vais !
        </button>
        <button type="button" className="card_container_right_contact">
          Logo 05 34 36 40 95
        </button>
      </div>
    </div>
  );
}

export default Card;
