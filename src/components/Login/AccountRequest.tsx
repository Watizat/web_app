import { Link } from 'react-router-dom';
import './Login.scss';

function AccountRequest() {
  return (
    <div className="login accountRequest">
      <h1>Demande de création de compte</h1>
      <form className="login-form accountRequest-form">
        <input type="text" placeholder="Prénom" />
        <input type="text" placeholder="Nom de famille" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Mot de passe" />
        <select>
          <option value="" disabled>
            Groupe local
          </option>
          <option value="toulouse">Toulouse</option>
          <option value="paris">Paris</option>
        </select>
        <p className="accountRequest-form__text">
          La création de compte est réservée aux membres actifs des groupes
          locaux de l’association Watizat
          <br />
          <br />
          Toute demande devra être confirmée par un·e référent·e local
        </p>
        <button type="button">Confirmer la demande</button>
      </form>

      <div className="login-newAccount">
        Déja un compte ?
        <Link to="/login">
          <br />
          Se connecter
        </Link>
      </div>
    </div>
  );
}

export default AccountRequest;
