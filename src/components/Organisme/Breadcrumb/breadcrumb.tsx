import { Link, useNavigate } from 'react-router-dom';
import './breadcrumb.scss';

interface BreadcrumbProps {
  searchParams: {
    city: string;
    category: string;
  };
}

function Breadcrumb({ searchParams }: BreadcrumbProps) {
  return (
    <div className="breadcrumb">
      <Link
        to={{
          pathname: '/resultats',
          search: `?city=${searchParams.city}&category=${searchParams.category}`,
        }}
      >
        <button
          className="btn-flat btn-primary btn-slowRounded "
          type="button"
          // onClick={() => navigate(-1)}
        >
          <i className="las la-arrow-left" />
          Retour aux résultats
        </button>
      </Link>
      <ul>
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <i className="las la-angle-right" />
        <Link
          to={{
            pathname: '/resultats',
            search: `?city=${searchParams.city}&category=${searchParams.category}`,
          }}
        >
          <li>Résultats de recherche</li>
        </Link>
        <i className="las la-angle-right" />
        <Link to="/resultats/#" className="link-active">
          <li>Nom de l&apos;organisme</li>
        </Link>
      </ul>
    </div>
  );
}

export default Breadcrumb;
