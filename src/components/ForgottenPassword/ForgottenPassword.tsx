import { Link } from 'react-router-dom';
import './ForgottenPassword.scss';

function ForgottenPassword() {
  return (
    <div className="forgottenPassword">
      <h1>Mot de passé oublié</h1>
      <form className="forgottenPassword-form">
        <input type="text" placeholder="Email" />
        <button type="button">Demander la réinitialisation</button>
      </form>
      <div className="forgottenPassword-newAccount">
        Pas encore de compte ?
        <Link to="/account-request">
          <br />
          Faire une demande
        </Link>
      </div>
    </div>
  );
}

export default ForgottenPassword;
