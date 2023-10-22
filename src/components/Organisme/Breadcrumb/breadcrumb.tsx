import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import styles from './breadcrumb.module.scss';

function Breadcrumb() {
  const navigate = useNavigate();
  const lastSearch = localStorage.getItem('last_search');
  const targetPath = lastSearch !== null ? lastSearch : '/';
  const organism = useAppSelector((state) => state.organism.organism);
  const location = useLocation();

  return (
    <div className={styles.breadcrumb}>
      <button
        className="btn-flat btn-primary btn-slowRounded "
        type="button"
        onClick={() => navigate(targetPath)}
      >
        <i className={`${styles.las} las la-arrow-left`} />
        Retour aux résultats
      </button>
      <ul>
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <i className={`${styles.las} las la-angle-right`} />
        <Link to={targetPath}>
          <li>Résultats de recherche</li>
        </Link>
        <i className={`${styles.las} las la-angle-right`} />
        <Link to={`${location.pathname}`} className={styles.linkActive}>
          <li>{organism?.name}</li>
        </Link>
      </ul>
    </div>
  );
}

export default Breadcrumb;
