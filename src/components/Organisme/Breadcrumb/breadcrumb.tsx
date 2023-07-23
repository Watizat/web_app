import { Link, useNavigate } from 'react-router-dom';
import './breadcrumb.scss';

function Breadcrumb() {
  const navigate = useNavigate();

  return (
    <div className="breadcrumb">
      <button
        className="btn-flat btn-primary btn-slowRounded "
        type="button"
        onClick={() => navigate(-1)}
      >
        <i className="las la-arrow-left" />
        Retour aux résultats
      </button>
      <ul>
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <i className="las la-angle-right" />
        <Link to="/resultats">
          <li>Résultats de recherche</li>
        </Link>
        <i className="las la-angle-right" />
        <Link to="/resultats/#" className="link-active">
          <li>Nom de l'organisme</li>
        </Link>
      </ul>
    </div>
  );
}

export default Breadcrumb;
