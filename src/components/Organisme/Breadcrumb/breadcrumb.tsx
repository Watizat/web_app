import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import './breadcrumb.scss';

function Breadcrumb() {
  const navigate = useNavigate();
  const lastSearch = localStorage.getItem('last_search');
  const targetPath = lastSearch !== null ? lastSearch : '/';
  const organism = useAppSelector((state) => state.organism.organism);
  const location = useLocation();

  return (
    <div className="breadcrumb">
      <ul>
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <i className="las la-angle-right" />
        <Link to={targetPath}>
          <li>Résultats de recherche</li>
        </Link>
        <i className="las la-angle-right" />
        <Link to={`${location.pathname}`} className="link-active">
          <li>{organism?.name}</li>
        </Link>
      </ul>
      <button
        className="btn-flat btn-primary btn-slowRounded "
        type="button"
        onClick={() => navigate(targetPath)}
      >
        <i className="las la-arrow-left" />
        {'   '}Retour aux résultats
      </button>
    </div>
  );
}

export default Breadcrumb;
