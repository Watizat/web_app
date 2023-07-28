import { Link } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
  return (
    <div className="notFound">
      <div className="notFound-sketch">
        <div className="notFound-sketch__bee red" />
        <div className="notFound-sketch__bee blue" />
      </div>
      <h1 className="notFound-title">
        Erreur 404
        <small className="notFound-text">Page inconnue</small>
        <Link to="/" className="notFound-link">
          <small>Retour à l&apos;accueil</small>
        </Link>
      </h1>
    </div>
  );
}

export default NotFound;
